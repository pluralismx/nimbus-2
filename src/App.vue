<template>
    <!-- Login screen -->
    <div class="log-in" v-if="!session">
        <LoginComponent @user-logged-in="handleSession" />
    </div>
    <!-- Dashboard -->
    <div v-if="session" class="app-layout" :class="{ 'no-aside': aside }">

        <!-- Navigation bar -->
        <NavigationBarComponent 
            :userWebsites="websites" 
            @dashboard-data="handleDashboardData"
            @toggle-aside="toggleAside" 
            @toggle-workspace="toggleWorkspace" 
            @logged-out="handleSession" 
        />

        <!-- Left aside -->
        <NotesComponent 
            v-if="!aside" 
            :website="website" 
            :notes="notes" 
            @notes-updated="hanldeNotesUpdated" 
        />
        
        <!-- Workspace container -->
        <div class="router-wrapper" :class="{ 'wide': aside }">
            <LeadTableComponent 
                v-if="lead_table" 
                :website="website" 
                :leads="leads" 
                @lead-updated="handleLeadUpdated"
                @lead-added="handleLeadAdded"
                @lead-deleted="handleLeadDeleted"
            />
            <EmailComponent v-if="email"/>
        </div>

        <!-- Footer -->
        <FooterComponent />
    </div>
    <!-- Modals -->
    <div class="toast-container" v-show="modal">
        <ToastComponent />
    </div>

</template>

<script>
import axios from '@/lib/axios';
import LoginComponent from './components/LoginComponent.vue';
import NavigationBarComponent from './components/NavigationBarComponent.vue';
import NotesComponent from './components/NotesModule/NotesComponent.vue';
import LeadTableComponent from './components/LeadsModule/LeadTableComponent.vue';
import EmailComponent from './components/EmailModule/EmailComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import ToastComponent from './components/ToastComponent.vue';

export default {
    name: 'App',
    components: {
        LoginComponent,
        NavigationBarComponent,
        NotesComponent,
        LeadTableComponent,
        EmailComponent,
        FooterComponent,
        ToastComponent
    },
    data() {
        return {
            session: false,
            websites: null,
            website: null,
            notes: [],
            leads: [],
            aside: false,
            email: false,
            lead_table: false,
            modal: false
        }
    },
    methods: {
        handleSession() {
            if (this.session == false) {
                this.session = true;
                this.navBarData();
            } else if (this.session == true) {
                this.session = false;
            }
        },
        navBarData() {
            axios.get('/website/getSites', { withCredentials: true })
                .then(res => {
                    if (res.data.status === 'success') {
                        this.websites = res.data.websites;
                    } else {
                        console.log(res.data.status);
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        },
        handleDashboardData(data) {
            this.website = data.website;

            if (data.dashboard.notes) {
                this.notes = data.dashboard.notes;
            } else {
                this.notes = []
            }

            if (data.dashboard.leads) {
                this.leads = data.dashboard.leads;
            } else {
                this.leads = []
            }
        },
        hanldeNotesUpdated() {
            let formData = new FormData();
            let website = this.website;

            formData.append('id_website', website);

            axios.post('/note/getNotes', formData, { withCredentials: true })
                .then(res => {
                    this.notes = res.data;
                    this.modal = true;
                    setTimeout(() => {
                        this.modal = false;
                    }, 2000);
                }).catch(error => {
                    console.error(error);
                });
        },
        handleLeadAdded() {
            this.modal = true;
            setTimeout(() => {
                this.modal = false;
            }, 2000);
        },
        handleLeadUpdated() {
            let formData = new FormData();
            let website = this.website;

            formData.append('id_website', website);

            axios.post('/lead/getLeads', formData, { withCredentials: true })
                .then(res => {
                    if(res.data.status == 'success'){
                        this.leads = res.data.leads;
                        this.modal = true;
                        setTimeout(() => {
                            this.modal = false;
                        }, 2000);
                    }
                }).catch(error => {
                    console.error(error);
                });
        },
        handleLeadDeleted() {
            this.modal = true;
            setTimeout(() => {
                this.modal = false;
            }, 2000);
        },
        toggleAside() {
            if (this.aside == false) {
                this.aside = true;
            } else if (this.aside == true) {
                this.aside = false;
            }
        },
        toggleWorkspace(tool) {
            console.log(tool)
            switch(tool){
                case 'leads':
                    if(this.lead_table == false){
                        this.lead_table = true;
                        this.email = false;
                    }else{
                        this.lead_table = false;
                    }
                    break;
                case 'email':
                    if(this.email == false){
                        this.email = true;
                        this.lead_table = false;
                    }else{
                        this.email = false;
                    }
                    break;
            }
        }

    }
}
</script>

<style>
body {
    margin: 0px;
    font-family: 'Regular';
}

.app-layout {
    display: grid;
    grid-template-columns: 20vw 80vw;
    grid-template-rows: 8vh 86vh 6vh;
    font-family: 'Regular';
    background-color: var(--basic);
    z-index: 90;
}

.log-in {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: var(--dark);
}

.no-aside {
    display: grid;
    grid-template-columns: 100vw;
    grid-template-rows: 8vh 86vh 6vh;
}

.router-wrapper {
    height: 100%;
    grid-column: 2/3;
    grid-row: 2/3;
    background: var(--basic);
    box-sizing: border-box;
}

.wide {
    grid-column: 1/2;
    grid-row: 2/3;
}

.toast-container {
    position: absolute;
    bottom: 40px;
    right: 40px;
    color: black;
    padding: 10px 20px;
    border-radius: 5px;
    z-index: 100;
    background-color: greenyellow;
    box-shadow: 2px 2px 8px #444;
    transition: all 300ms;
}
</style>

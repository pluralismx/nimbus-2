<template>
    <div class="modal-screen">
        <div class="modal-container">
            <div class="modal-header">
                <span>Agregar lead manualmente</span>
                <button @click="close()" class="btn-warning">&times;</button>
            </div>
            <div class="modal-body">
                <div class="add-lead-form">

                    <div>
                        <label>Nombre</label>
                        <input v-model="name" type="text">
                    </div>
                    <div>
                        <label>Phone</label>
                        <input v-model="phone" type="text">
                    </div>
                    <div>
                        <label>Email</label>
                        <input v-model="email" type="text">
                    </div>

                    <div>
                        <label>Status</label>
                        <select v-model="status">
                            <option v-for="option in status_list" :key="option">{{ option }}</option>
                        </select>
                    </div>

                </div>
            </div>
            <div class="modal-footer">
                <button @click="addLead()" class="btn-warning">guardar</button>&nbsp;&nbsp;
                <button @click="close()" class="btn-primary">cancelar</button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from '@/lib/axios'
export default {
    name: 'LeadAddModalComponent',
    props:{
        website : {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            website_id: null,
            name: null,
            phone: null,
            email: null,
            status: null,
            status_list: [
                "Nuevo",
                "Identificacion",
                "Presentacion",
                "Cotiziacion",
                "Negociacion",
                "Cierre"
            ]
        }
    },
    computed: {
        updated_website(){
            return this.website;
        }
    },
    watch: {
        updated_website: {
            handler(newVal){
                this.website_id = newVal;
            },
            immediate: true
        }
    },
    methods: {
        addLead(){

            let formData = new FormData();
            let content = "this is a test";

            formData.append('id_website', this.website_id);
            formData.append('name', this.name);
            formData.append('phone', this.phone);
            formData.append('email', this.email);
            formData.append('status', this.status);
            formData.append('content', content);

            axios.post('/lead/addLeadManually', formData)
                .then(res=>{
                    if(res.data.status == 'success'){
                        const new_lead = {
                            "name": this.name,
                            "phone": this.phone,
                            "email": this.email,
                            "status": this.status,
                            "created_at": "ahora"
                        };
                        this.$emit('lead-added', new_lead);
                    }
                })
                .catch(error=>{
                    console.log(error);
                });
        },
        close(){
            this.$emit("close-modal");
        }

    }
}

</script>

<style scoped>
    .modal-screen {
        top: 0;
        left: 0;
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        background-color: rgba(8, 8, 8, .7);
        z-index: 100;
    }

    .modal-container {
        width: 20%;
        background-color: var(--basic);
        border-radius: .5rem;
        box-shadow: 3px 3px 6px var(--shadows);
    }

    .modal-header {
        background-color: var(--primary);
        padding: .5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: var(--basic);
        border-top-left-radius: .5rem;
        border-top-right-radius: .5rem;
    }

    .modal-body{
        padding: .5rem;
    }

    .add-lead-form {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .add-lead-form div {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 1rem;
        align-items: center;
    }

    .add-lead-form div input, select {
        width: 70%;
    }

    .modal-footer {
        display: flex;
        justify-content: center;
        padding-bottom: 1rem;
    }
</style>
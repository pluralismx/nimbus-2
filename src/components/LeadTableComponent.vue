<template>
    <section>
        <div class="title-bar">
            <h1>Prospectos</h1>
            <span @click="add_lead_modal = true">nuevo</span>
        </div>
        <hr>
        <br>
        <table>
            <thead>
                <tr class="table-tools">
                    <td class="table-search" colspan="2">
                        <label for="">Buscar:&nbsp;</label>
                        <input type="text">&nbsp;
                        <button class="btn-green">buscar</button>
                    </td>
                    <td class="table-pagination" colspan="4">
                        <label for="rows_per_page">filas por página: </label>
                        <select v-model="this.rp" class="select-rows">
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                        </select>
                        <button @click="previousPage">&lt;</button>
                        <span>&nbsp;{{ this.cp }}</span><span>&nbsp;/&nbsp;</span><span>{{ this.pages }}&nbsp;</span>
                        <button @click="nextPage">&gt;</button>
                    </td>
                </tr>
                <tr>
                    <th width="18%" @click="sortTable('name')"><span>Nombre</span></th>
                    <th width="18%" @click="sortTable('phone')"><span>Telefono</span></th>
                    <th width="18%" @click="sortTable('email')"><span>Correo</span></th>
                    <th width="18%" @click="sortTable('status')"><span>Status</span></th>
                    <th width="18%"><span>Fecha</span></th>
                    <th width="18%">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <TableRowComponent 
                    v-for="lead in displayedData" 
                    :leadData="lead" 
                    :key="lead.id_lead" 
                    @lead-updated="handleLeadUpdated"
                />
            </tbody>
        </table>
    </section>
    <LeadAddModalComponent 
        :website="website_id" 
        v-show="add_lead_modal" 
        @close-modal="add_lead_modal = false"
        @lead-added="handleLeadUpdated"
    />
</template>
<script>

    import TableRowComponent from './TableRowComponent.vue';
    import LeadAddModalComponent from './LeadAddModalComponent.vue';

    export default {
        name: 'LeadTableComponent',
        components: {
            TableRowComponent,
            LeadAddModalComponent
        },
        props: {
            leads : {
                type: Array,
                required: true
            },
            website : {
                type: Number,
                required: true
            }
        },
        data(){
            return {
                website_id: null,
                add_lead_modal: false,
                leads_local: null,
                leads_per_page: null,
                rp: 10,
                cp: 1         
            }
        },
        computed: {

            website_updated(){
                return this.website;
            },
            leads_updated() {
                return this.leads;
            },
            pages() {
                return Math.ceil((this.leads_local.length / this.rp));
            },
            limitStart() {
                return (this.cp - 1) * this.rp;
            },
            limitEnd(){
                return (this.rp * this.cp);
            },
            displayedData(){
                return this.leads_local.slice(this.limitStart, this.limitEnd);
            }

        },
        watch: {
            leads_updated: {
                handler(newVal){
                    this.leads_local = newVal;
                },
                immediate: true,
                deep: true
            },
            website_updated: {
                handler(newVal){
                    this.website_id = newVal;
                },
                immediate: true
            },
        },
        methods: {
            nextPage(){
                if(this.cp < this.pages){
                    this.cp++;
                }
            },
            previousPage(){
                if(this.cp > 1){
                    this.cp--;
                }
            },
            handleLeadUpdated(){
                this.add_lead_modal = false;
                this.$emit('lead-updated');
            },
            sortTable(index) {

                let asc = true;
                let desc = true;

                for (let i = 1; i < this.leads_local.length; i++) {
                    if (this.leads_local[i][index] < this.leads_local[i - 1][index]) {
                        asc = false;
                    }
                    if (this.leads_local[i][index] > this.leads_local[i - 1][index]) {
                        desc = false;
                    }
                }

                if (desc) {
                    this.leads_local.sort((a, b) => {
                        let columnA = a[index];
                        let columnB = b[index];
                        return columnA.localeCompare(columnB, 'es', { sensitivity: 'base' });
                    });
                } else if (asc) {
                    this.leads_local.sort((a, b) => {
                        let columnA = a[index];
                        let columnB = b[index];
                        return -columnA.localeCompare(columnB, 'es', { sensitivity: 'base' });
                    });
                } else {
                    this.leads_local.sort((a, b) => {
                        let columnA = a[index];
                        let columnB = b[index];
                        return columnA.localeCompare(columnB, 'es', { sensitivity: 'base' });
                    });
                }
                
            }
        }
    }
</script>
<style scoped>
    section {
        background-color: silver;
        padding: 2rem;
        box-sizing: border-box;
        height: 100%;
        overflow-y: scroll;
    }

    .title-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .title-bar h1 {
        margin: 0px;
    }

    .title-bar span:hover {
        cursor: pointer;
        font-weight: bold;
    }


    table{
        width: 100%;
        border-collapse: collapse;
        box-shadow: 2px 2px 3px #222;
    }

    thead{
        background-color: brown;
        color: white;
    }

    thead tr th {
        padding: .5rem;
        width: 10%;
        height: 2rem;
    }

    thead tr th span{
        color: var(--accent);
        transition: all 300ms;
    }

    thead tr th span:hover{
        text-shadow: 0 0 4px var(--accent);
        cursor: pointer;
    }

    tbody tr:nth-child(odd) {
        background-color: #444;
        color: white;
    }

    .table-tools {
        background-color: brown;
        color: white;
        box-shadow: 0 1px 3px #222;
    }

    .table-tools td {
        padding: .5rem;
    }

    .table-search {
        text-align: left;
    }

    .table-search input{
        width: 15rem;
    }

    .table-pagination {
        text-align: right;
    }

    .select-rows {
        width: 4rem;
        margin-right: 1rem;
        padding: 5px;
    }

    button {
        border-radius: 3px;
        background-color: olivedrab;
        color: white;
        border: none;
        box-shadow: 2px 2px 3px #222;
    }

    button:hover{
        background-color: #222;
        cursor: pointer;
    }

    input {
        padding: 5px;
        width: 75%;
        border-radius: 4px;
        border:none;
    }

    input:focus{
        outline: none;
    }
</style>
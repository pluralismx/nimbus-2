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
                        <span>&nbsp;{{ this.cp }}</span><span>&nbsp;/&nbsp;</span><span>{{ this.tablePagination }}&nbsp;</span>
                        <button @click="nextPage">&gt;</button>
                    </td>
                </tr>
                <tr>
                    <th width="18%"><span @click="sortTable('name')">Nombre</span></th>
                    <th width="18%"><span @click="sortTable('phone')">Telefono</span></th>
                    <th width="18%"><span @click="sortTable('email')">Correo</span></th>
                    <th width="18%"><span @click="sortTable('status')">Status</span></th>
                    <th width="18%"><span @click="sortTable('date')">Fecha</span></th>
                    <th width="18%">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <TableRowComponent v-for="lead in displayedTableData" :leadData="lead" :key="lead.id_lead" @lead-updated="handleLeadUpdated"/>
            </tbody>
        </table>
        <LeadAddModalComponent v-show="add_lead_modal"/>
    </section>
</template>
<script>
    import axios from 'axios';
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
            }
        },
        data(){
            return {
                rp: 10, // Rows per page
                cp: 1, // Current page
                order_by_name: false,
                order_by_phone: false,
                order_by_email: false,
                order_by_status: false,
                order_by_date: false,
                add_lead_modal: false
            }
        },
        computed: {
            leads_local() {
                return [...this.leads];
            },
            tablePagination(){
                return Math.ceil((this.leads.length) / this.rp);
            },
            limitStart(){
                return (this.cp - 1) * this.rp;
            },
            limitEnd(){
                return (this.cp * this.rp);
            },
            displayedTableData(){
                return this.leads_local.slice(this.limitStart, this.limitEnd);
            }
        },
        methods: {
            nextPage(){
                if(this.cp < this.tablePagination){
                    this.cp++;
                    console.log(this.cp);
                }
            },
            previousPage(){
                if(this.cp > 1){
                    this.cp--;
                    console.log(this.cp);
                }
            },
            sortTable(column) {

                switch(column){
                    case 'name':
                        if(!this.order_by_name){
                            this.leads_local.sort((a, b) => a.name.localeCompare(b.name));
                            this.order_by_name = true;
                        }else{
                            this.leads_local.sort((a, b) => b.name.localeCompare(a.name));
                            this.order_by_name = false;
                        }
                    break;

                    case 'phone':
                        if(!this.order_by_phone){
                            this.leads_local.sort((a, b) => a.phone.localeCompare(b.phone));
                            this.order_by_phone = true;
                        }else{
                            this.leads_local.sort((a, b) => b.phone.localeCompare(a.phone));
                            this.order_by_phone = false;
                        }
                    break;
                    
                    case 'email':
                        if(!this.order_by_email){
                            this.leads_local.sort((a, b) => a.email.localeCompare(b.email));
                            this.order_by_email = true;
                        }else{
                            this.leads_local.sort((a, b) => b.email.localeCompare(a.email));
                            this.order_by_email = false;
                        }
                    break;

                    case 'status':
                        if(!this.order_by_status){
                            this.leads_local.sort((a, b) => a.status.localeCompare(b.status));
                            this.order_by_status = true;
                        }else{
                            this.leads_local.sort((a, b) => b.status.localeCompare(a.status));
                            this.order_by_status = false;
                        }
                    break;

                    case 'date':
                        if(!this.order_by_date){
                            this.leads_local.sort((a, b) => a.created_at.localeCompare(b.created_at));
                            this.order_by_date = true;
                        }else{
                            this.leads_local.sort((a, b) => b.created_at.localeCompare(a.created_at));
                            this.order_by_date = false;
                        }
                    break;  
                }
            },
            deleteUser(id){
                let formData = new FormData();
                formData.append('id_user', id)
                axios.post('http://localhost/api-equipo-dos/user/deleteUser', formData)
                     .then(res => {
                        if(res.data == 'success'){
                            this.recordsUser();
                        }
                     })
                     .catch(error => {
                        console.error(error);
                    });
            },
            editUser(id){

                let nombre = document.querySelector('#cell-nombre'+id);
                let apellidos = document.querySelector('#cell-apellidos'+id);
                let telefono = document.querySelector('#cell-telefono'+id);
                let correo = document.querySelector('#cell-correo'+id);
                let button_edit = document.querySelector('#cell-button-edit'+id);

                let nombre_edit = document.querySelector('#edit-nombre'+id);
                let apellidos_edit = document.querySelector('#edit-apellidos'+id);
                let telefono_edit = document.querySelector('#edit-telefono'+id);
                let correo_edit = document.querySelector('#edit-correo'+id);
                let button_save = document.querySelector('#cell-button-save'+id);

                nombre.style.display = 'none';
                apellidos.style.display = 'none';
                telefono.style.display = 'none';
                correo.style.display = 'none';
                button_edit.style.display = 'none';

                nombre_edit.style.display = 'table-cell';
                apellidos_edit.style.display = 'table-cell';
                telefono_edit.style.display = 'table-cell';
                correo_edit.style.display = 'table-cell';
                button_save.style.display = 'table-cell';
                
            },
            handleLeadUpdated(){
                this.$emit('handleLeadUpdated');
            },  
            cancelUpdate(id){
                document.querySelector('#cell-nombre'+id).style.display = 'table-cell';
                document.querySelector('#cell-apellidos'+id).style.display = 'table-cell';
                document.querySelector('#cell-telefono'+id).style.display = 'table-cell';
                document.querySelector('#cell-correo'+id).style.display = 'table-cell';
                document.querySelector('#cell-button-edit'+id).style.display = 'table-cell';

                document.querySelector('#edit-nombre'+id).style.display = 'none';
                document.querySelector('#edit-apellidos'+id).style.display = 'none';
                document.querySelector('#edit-telefono'+id).style.display = 'none';
                document.querySelector('#edit-correo'+id).style.display = 'none';
                document.querySelector('#cell-button-save'+id).style.display = 'none';
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
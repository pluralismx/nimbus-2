<template>
    <tr>
        <td v-if="!edit">{{ this.name }}</td>
        <td v-if="edit"><input v-model="name" type="text" :placeholder="leadData.name"></td>

        <td v-if="!edit">{{ this.phone }}</td>
        <td v-if="edit"><input v-model="phone" type="text" :placeholder="leadData.phone"></td>

        <td v-if="!edit">{{ this.email }}</td>
        <td v-if="edit"><input v-model="email" type="text" :placeholder="leadData.email"></td>

        <td>
            <select class="select-status" v-model="status" :style="{ backgroundColor: statusColor }" @change="updateLead()">
                <option v-for="statusOption in this.select_values" :key="statusOption" :value="statusOption">{{ statusOption }}</option>
            </select>
        </td>

        <td>{{ this.date }}</td>

        <td v-if="!edit"><button @click="editForm()">editar</button><button @click="deleteLead()">borrar</button></td>
        <td v-if="edit"><button @click="updateLead()">actualizar</button><button @click="editForm()">cancelar</button></td>
    </tr>
</template>
<script>
    import axios from 'axios';
    export default {
        name: 'TableRowComponent',
        props: {
            leadData : {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                id: '',
                edit: false,
                name: '',
                phone: '',
                email: '',
                status: '',
                date: '',
                select_values: [
                    'Nuevo',
                    'Identificación',
                    'Presentación',
                    'Cotización',
                    'Negociación',
                    'Cierre'
                ]
            }
        },
        created() {
            this.id = this.leadData.id_lead;
            this.name = this.leadData.name;
            this.phone = this.leadData.phone;
            this.email = this.leadData.email;
            this.status = this.leadData.status;
            this.date = this.leadData.created_at;
        },
        computed: {
            statusColor() {
                switch (this.status) {
                    case 'Nuevo':
                        return '#222'; 
                    case 'Identificación':
                        return '#013856'; 
                    case 'Presentación':
                        return '#055065';
                    case 'Cotización':
                        return '#017260';
                    case 'Negociación':
                        return '#14A95F';
                    case 'Cierre':
                        return '#67E36C'; 
                    default:
                        return 'white';
                }
            }
        },
        methods: {
            editForm(){
                if(this.edit == true){
                    this.edit = false;
                }else if(this.edit == false){
                    this.edit = true;
                }
            },
            updateLead() {

                let id = this.id;
                let name = this.name;
                let phone = this.phone;
                let email = this.email;
                let status = this.status;

                let formData = new FormData();
                formData.append('id_lead', id);
                formData.append('name', name);
                formData.append('phone', phone);
                formData.append('email', email);
                formData.append('status', status);

                axios.post('http://localhost/api-equipo-dos/lead/updateLead', formData)
                     .then(res => {
                        if(res.data == 'succes'){
                            this.$emit('lead-updated');
                            
                            if(this.edit){
                                this.editUser();
                            }
                        }
                     })
                     .catch(error => {
                        console.error(error);
                    });
            },
            deleteLead(){

                console.log('hola');
                let id = this.id;
                console.log(id);
                
                let formData = new FormData();
                formData.append('id_lead', id);

                axios.post('http://localhost/api-equipo-dos/lead/deleteLead', formData)
                     .then(res => {
                        if(res.data == 'succes'){
                            this.$emit('lead-updated');
                            
                            if(this.edit){
                                this.editUser();
                            }
                        }
                     })
                     .catch(error => {
                        console.error(error);
                    });
            }

        }
    }
</script>
<style>
    td {
        padding: 6px;
        text-align: center;
        height: 2rem;
    }

    .select-status {
        color: white;
    }
</style>
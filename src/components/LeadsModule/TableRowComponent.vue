<template>
    <tr>
        <!-- Name -->
        <td v-if="!edit" width="18%">{{ this.name }}</td>
        <td v-if="edit" width="18%"><input v-model="name" type="text" :placeholder="leadData.name"></td>

        <!-- Phone -->
        <td v-if="!edit" width="18%">{{ this.phone }}</td>
        <td v-if="edit" width="18%"><input v-model="phone" type="text" :placeholder="leadData.phone"></td>

        <!-- Email -->
        <td v-if="!edit" width="18%">{{ this.email }}</td>
        <td v-if="edit" width="18%"><input v-model="email" type="text" :placeholder="leadData.email"></td>

        <!-- Status -->
        <td width="18%">
            <select class="select-status" v-model="status" :style="{ color: statusColor }" @change="updateLead()">
                <option v-for="statusOption in this.select_values" :key="statusOption" :value="statusOption">{{ statusOption }}</option>
            </select>
        </td>

        <!-- Date -->
        <td>{{ this.date }}</td>

        <!-- Actions -->
        <td v-if="!edit" width="18%">
            <button class="btn-primary" @click="editForm()">editar</button>&nbsp;&nbsp;<button class="btn-warning" @click="deleteLead()">borrar</button>
        </td>
        <td v-if="edit" width="18%">
            <button class="btn-warning" @click="updateLead()">actualizar</button>&nbsp;&nbsp;<button class="btn-primary" @click="editForm()">cancelar</button>
        </td>
    </tr>
</template>
<script>
    import axios from '@/lib/axios';
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
                        return 'gray'; 
                    case 'Identificación':
                        return 'red'; 
                    case 'Presentación':
                        return 'red';
                    case 'Cotización':
                        return 'orange';
                    case 'Negociación':
                        return 'orange';
                    case 'Cierre':
                        return 'green'; 
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

                let formData = new FormData();
                formData.append('id_lead', this.id);
                formData.append('name', this.name);
                formData.append('phone', this.phone);
                formData.append('email', this.email);
                formData.append('status', this.status);

                const updated_lead = {
                    "name": this.name,
                    "phone": this.phone,
                    "email": this.email,
                    "status": this.status
                };

                let id_lead = this.id_lead;

                axios.post('/lead/updateLead', formData)
                     .then(res => {
                        if(res.data.status == 'success'){
                            this.$emit('lead-updated', id_lead, updated_lead);
                            this.edit = false;
                        }
                     })
                     .catch(error => {
                        console.error(error);
                    });
            },
            deleteLead(){

                let formData = new FormData();
                formData.append('id_lead', this.id);

                axios.post('/lead/deleteLead', formData)
                     .then(res => {
                        if(res.data.status == 'success'){
                            this.$emit('lead-deleted', this.id);
                        }
                     })
                     .catch(error => {
                        console.error(error);
                    });
            }

        }
    }
</script>
<style scoped>
    td {
        padding: 6px;
        text-align: center;
        height: 2rem;
    }

    .select-status {
        color: white;
    }

    button {
        width: 40%;

    }

    input {
        width: 85%;
    }
</style>
<template>
    <div class="login-form-container">
        <div class="login-form-header">
            <h1>Nimbus CRM</h1>
        </div>
        <form action="">
            <input v-model="email" type="text" placeholder="usuario">
            <input v-model="password" type="password" placeholder="contraseña">
            <span v-if="failed">información inválida</span>
        </form>
        <div class="login-form-footer">
            <button @click="login()" class="btn-green">iniciar sesión</button>
            <br>
            <a href="">¿olvidó su contraseña?</a>
        </div>
    </div>
</template>
<script>
    import axios from '@/lib/axios';
    export default {
        name: 'LoginComponent',
        data(){
            return {
                email: 'gerardo@pluralis.com.mx',
                password: 'pito',
                failed: false
            }
        },
        methods: {
            login() {
                let email = this.email;
                let password = this.password;
                let formData = new FormData();
                formData.append('email', email);
                formData.append('password', password);

                axios.post('/user/login', formData, { withCredentials: true })
                    .then(res => {
                        if (res.data.status === 'success') {
                            this.$emit('isLogged');
                        } else if (res.data.status === 'error') {
                            this.failed = true;
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
    .login-form-container {
        background-color: var(--basic);
        width: 30%;
        height: 30vh;
        padding: 1rem;
        border-radius: .5rem;
        box-shadow: 2px 2px 4px black;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .login-form-container h1 {
        margin: 0;
        color: var(--light);
    }

    form {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    span {
        font-size: 10px;
        color: var(--light);
    }

    .login-form-footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    a {
        color: var(--accent);
    }
    
    a:hover {
        text-shadow: 0 0 20px var(--accent);
    }
</style>
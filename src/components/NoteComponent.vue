<template>
    <div class="note-container">
        <div class="note-header">
            <input type="text" v-model="title">
        </div>
        <div class="note-body">
            <textarea name="cuerpo de la nota" placeholder="Escribe algo interesante" v-model="content"></textarea>
        </div>
        <div class="note-footer">
            <button class="btn-green" @click="deleteNote()">eliminar</button>
            <button class="btn-green" @click="updateNote()">editar</button>
            <button class="btn-green">copiar</button>
        </div>
    </div>
</template>
<script>
    import axios from '@/lib/axios';
    export default {
        name: 'NoteComponent',
        props: {
            noteData: {
                type: Object,
                required: true
            }
        },
        created() {
            this.title = this.noteData.title;
            this.content = this.noteData.content;
        },
        data() {
            return {
                title: null,
                content: null
            }
        },
        methods: {
            updateNote() {
                let id = this.noteData.id_note;
                const formData = new FormData();
                formData.append('id_note', id);
                formData.append('title', this.title);
                formData.append('content', this.content);

                axios.post('/note/update', formData, {withCredentials: true})
                    .then(res => {
                        if(res.data == 'success'){
                            alert('Se actualizo la nota');
                        }
                    })
                    .catch(error => {
                        console.error(error);
                    });

            },
            deleteNote(){
                let formData = new FormData();
                let id = this.noteData.id_note;
                formData.append('id_note', id);
                axios.post('/note/delete', formData, { withCredentials: true})
                     .then(()=>{
                        this.$emit('handle-update');
                     }).catch(error=>{
                        console.error(error)
                     });
            }
        }
    }
</script>
<style scoped>
    .note-container {
        background-color: var(--basic);
        border-radius: .5rem;
        box-shadow: 2px 2px 3px black;
        box-sizing: border-box;
        height: 50%;
        margin-bottom: 2rem;
    }

    .note-header {
        height: 15%;
        border-bottom: 1px solid var(--accent);
    }

    .note-header input{
        background-color: transparent;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 1rem;
        border: none;
        color: var(--accent);
        font-size: 16px;
    }

    .note-header input:focus{
        outline: none;
    }

    .note-body {
        height: 70%;
        background-color: transparent;
        border-bottom: 1px solid var(--accent);
    }

    .note-body textarea {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 1rem;
        background-color: transparent;
        border: none;
        font-family: 'regular';
        color: var(--accent);
    }

    .note-body textarea:focus{
        outline: none;
    }

    .note-footer {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        height: 15%;
        background-color: transparent;
        border: none;
        padding: 0 .5rem;
    }

    button {
        width: 30%;
    }
</style>
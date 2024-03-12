<template>
    <div class="note-container">
        <div class="note-header">
            <input v-model="title" type="text" placeholder="Título">
        </div>
        <div class="note-body">
            <textarea v-model="content" placeholder="Escribe algo interesante"></textarea>
        </div>
        <div class="note-footer">
            <button class="btn-green" @click="createNote()">guardar</button>
        </div>
    </div>
</template>

<script>

    import axios from '@/lib/axios';
    export default{
        name: 'NewNoteComponent',
        props: {
            website: {
                type: Number,
                required: true
            }
        },
        data(){
            return {
                title: null,
                content: null
            }
        },
        methods: {
            createNote(){

                let website = this.website;
                let title = this.title;
                let content = this.content;
                let formData = new FormData();
                
                formData.append('id_website', website);
                formData.append('note_title', title);
                formData.append('note_content', content);
                axios.post('/note/save', formData, { withCredentials: true })
                     .then(() => {
                        this.$emit('notes-updated');
                        this.title = null;
                        this.content = null;
                     }).catch(error=>{
                        console.error(error);
                     });
            }
        }
    }
</script>

<style scoped>
    .note-container {
        background-color: silver;
        border-radius: .5rem;
        box-shadow: 2px 2px 3px black;
        box-sizing: border-box;
        height: 50%;
        margin-bottom:2rem;
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
        color: var(--dark);
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
        color: var(--dark);
    }

    .note-body textarea:focus{
        outline: none;
    }

    .note-footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 15%;
        background-color: transparent;
        border: none;
    }
</style>
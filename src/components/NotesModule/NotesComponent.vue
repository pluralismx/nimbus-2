<template>
    <aside>
        <div class="header">
            <h1>Notas</h1>
            <span @click="toggleNewNote()">crear</span>
        </div>
        <hr>
        <NewNoteComponent v-if="isVisibleNewNote" :website="website" @notes-updated="handleNotesUpdated"/> 
        <NoteComponent v-for="note in notes" :key="note.id_note" :noteData="note" @handle-update="handleNotesUpdated"/>
    </aside>
</template>
<script>

    import NewNoteComponent from './NewNoteComponent.vue';
    import NoteComponent from './NoteComponent.vue';
    
    export default {
        name: 'NotesComponent',
        props: {
            website: {
                type: Number,
                required: true
            },
            notes: {
                type: Array,
                required: true
            }
        },
        components: {
            NoteComponent,
            NewNoteComponent
        },
        data(){
            return {
                notes_local: [],
                isVisibleNewNote: false
            }
        },
        methods: {
            toggleNewNote(){
                if(this.isVisibleNewNote == false){
                    this.isVisibleNewNote = true;
                }else if(this.isVisibleNewNote == true){
                    this.isVisibleNewNote = false;
                }
            },
            handleNotesUpdated(){
                this.$emit('notes-updated');
            }
        }
    }
</script>
<style scoped>
    aside {
        grid-row: 2/3;
        grid-column: 1/2;
        background-color: var(--primary);
        padding: 2rem;
        box-sizing: border-box;
        height: 100%;
        overflow-y: scroll;
    }
    .header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    h1 {
        margin: 0px;
        color: var(--basic);
    }

    span {
        margin: 0px;
        color: var(--basic);
    }

    span:hover{
        cursor: pointer;
        text-shadow: 0 0 3px white;
    }
    button {
        background-color: olivedrab;
        border: none;
        padding: .5rem;
        border-radius: 3px;
        color: white;
        box-shadow: 2px 2px 2px #222;
    }

    button:hover{
        background-color: #222;
        cursor: pointer;
    }

</style>
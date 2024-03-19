<template>
    <div class="tool-bar">
        <ul>
            <li @click="toggleOptions('recipients')">Destinatarios</li>
            <li @click="toggleOptions('template')">Plantillas</li>
            <li @click="screenSize('pc')">PC</li>
            <li @click="screenSize('mobile')">Móvil</li>
            <li>Configuración</li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'EmailToolBarComponent',
        methods: {
            toggleOptions(option) {
                this.$emit('toggle-settings', option);
            },
            screenSize(size) {
                this.$emit('change-size', size);
            }

        }
    }
</script>
<style scoped>
    
    .tool-bar {
        background-color: var(--primary);
        color: var(--basic);
        padding: 1rem;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: space-between;
    }

    ul li:hover {
        cursor: pointer;
        color: var(--accent);
    }

</style>
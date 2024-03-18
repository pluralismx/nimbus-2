<template>
    <div class="tool-bar">
        <ul>
            <li>Destinatarios</li>
            <li>Plantillas</li>
            <li>Personalizado</li>
            <li>PC</li>
            <li>Móvil</li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'EmailToolBarComponent'
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
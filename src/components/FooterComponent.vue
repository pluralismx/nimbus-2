<template>
    <footer>
        <h3>Pluralis, 2023</h3>
    </footer>
</template>
<script>
    export default {
        name: 'FooterComponent'
    }
</script>
<style scoped>
    footer {
        grid-row: 3/4;
        grid-column: 1/3;
        background: #222;
        color: var(--light);
        display: flex;
        align-items: center;
        padding: 0px 1rem;
    }
    h3 {
        margin: 0px;
        padding: 0px;
    }
</style>
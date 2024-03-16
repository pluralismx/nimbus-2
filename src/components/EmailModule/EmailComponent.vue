<template>
    <section>
        <div class="title-bar">
            <h1>Email Campaing</h1>
            <hr/>
        </div>
        <hr>
    </section>
</template>
<script>
    export default {
        name: 'EmailComponent'
    }
</script>
<style>
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
</style>
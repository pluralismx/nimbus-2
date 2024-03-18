<template>
    <section>
        <div class="title-bar">
            <h1>Email Campaing</h1>
        </div>
        <hr/>
        <div class="email-container">
            <div class="email-toolbar">
                <EmailToolBarComponent/>
            </div>
            <div class="email-body">
                <EmailSettingsComponent/>
            </div>
        </div>
    </section>
</template>
<script>
    import EmailToolBarComponent from './EmailToolBarComponent.vue';
    import EmailSettingsComponent from './EmailSettingsComponent.vue';

    export default {
        name: 'EmailComponent',
        components: {
            EmailToolBarComponent,
            EmailSettingsComponent
        }
    }
</script>
<style scoped>
    section {
        background-color: var(--basic);
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

    .email-container {
        box-shadow: 2px 2px 4px var(--shadows);
        height: 92%;
    }

    .email-body {
        height: inherit;
        display: grid;
        grid-template-columns: 30% 70%;
        grid-template-rows: 100%;
    }
</style>
<template>
    <section class="settings-aside">

        <!-- Template select -->
        <div class="settings-container">

            <!-- Title -->
            <div class="settings-header">
                <span>Seleccione un templete</span>
            </div>
            <!-- Content -->
            <div class="settings-body">
            
                <div class="select-block">
                    <label>Plantilla</label>
                    <select v-model="template" @change="toggleTemplate()">
                        <option value="promotional">promotional</option>
                        <option value="newsletter">news letter</option>
                    </select>
                </div>

                <div class="select-block">
                    <label>Tema</label>
                    <select v-model="theme" @change="toggleTheme()">
                        <option v-for="color in themes" :key="color" :value="color.hex">{{ color.name }}</option>
                    </select>
                </div>

            </div>
        </div>

        <!-- Promotional -->
        <PromotionalTemplateSettingsComponent
            v-show="template == 'promotional'"
        />

        <!-- News Letter -->
        <NewsLetterTemplateSettingsComponent 
            v-show="template == 'newsletter'"
        />

    </section>
</template>
<script>
    import PromotionalTemplateSettingsComponent from './PromotionalTemplateSettingsComponent.vue';
    import NewsLetterTemplateSettingsComponent from './NewsLetterTemplateSettingsComponent.vue';
    export default {
        name: 'EmailTemplateSettingsComponent',
        components: {
            PromotionalTemplateSettingsComponent,
            NewsLetterTemplateSettingsComponent
        },
        data() {
            return {
                themes: [
                    {"name": "Goldstone", "hex":"#630006"},
                    {"name": "Jasper", "hex":"#a00f16"},
                    {"name": "Carnelian", "hex":"#ba4a00"},
                    {"name": "Aventurine", "hex":"#e48600"},
                    {"name": "Amethyst", "hex":"#4d1564"},
                    {"name": "Garnet", "hex":"#780132"},
                    {"name": "Dumortierte", "hex":"#12376a"},
                    {"name": "Jadeite", "hex":"#037e99"},
                    {"name": "Jade", "hex":"#25654e"},
                    {"name": "Apatite", "hex":"#003e48"}
                ],
                template: null,
                theme: null

            }
        },
        methods: {
            toggleTemplate() {
                this.$emit('template-changed', this.template);
            },
            toggleTheme(){
                this.$emit('theme-changed', this.theme);
            }
        }
    }
</script>
<style scoped>

    .settings-aside {
        box-sizing: border-box;
        border-right: 1px solid var(--primary);
        grid-column: 1/2;
        grid-row: 1/2;
        padding: 1rem;
        overflow-y: scroll;
    }

    .settings-container {
        margin-top: 1rem;
    }

    .settings-header{
        background-color: var(--primary);
        color: var(--basic);
        padding: .5rem;
    }

    .settings-body {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .select-block {
        margin: 1rem 0;
        display: flex;
        flex-direction: column;
    }

    .select-block select {
        margin-top: .5rem;
    }

</style>
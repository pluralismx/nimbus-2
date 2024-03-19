<template>
    <div class="settings-container">
        <div class="options-block-container">
            <div class="options-header">
                <span>Seleccione un templete</span>
            </div>
            <div class="options-body">
                <div class="select-block">
                    <div>
                        <label>Plantilla</label>
                        <select v-model="template" @change="toggleTemplate()">
                            <option value="promotional">promotional</option>
                            <option value="newsletter">news letter</option>
                        </select>
                    </div>

                    <div>
                        <label>Tema</label>
                        <select @change="toggleTheme()" v-model="theme">
                            <option v-for="color in themes" :key="color" :value="color.hex">{{ color.name }}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'EmailTemplateSettingsComponent',
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

    .settings-container {
        border-right: 1px solid var(--primary);
        grid-column: 1/2;
        grid-row: 1/2;
        padding: 1rem;
    }

    .options-block-container {
        width: 100%;
        margin-bottom: 2rem;

    }

    .options-header{
        padding: .5rem;
        background-color: var(--primary);
        color: var(--basic);
    }

    .options-body {
        padding-top: .5rem;
        width: 100%;
        box-sizing: border-box;
    }

    .select-block {
        margin-bottom: .5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .select-block div {
        display: flex;
        flex-direction: column;
    }

    input[type="text"] {
        box-sizing: border-box;
        width: 100%;
    }

    .actions-block-container {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>
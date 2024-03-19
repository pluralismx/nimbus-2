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
                        <select>
                            <option value=""></option>
                        </select>
                    </div>

                    <div>
                        <label>Tema</label>
                        <select>
                            <option v-for="color in tema" :key="color">{{ color }}</option>
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
                tema: {
                    Goldstone: '#630006',
                    Jasper: '#a00f16',
                    Carnelian: '#ba4a00',
                    Aventurine: '#e48600',
                    Amethyst: '#4d1564',
                    Garnet: '#780132',
                    Dumortierte: '#12376a',
                    Jadeite: '#037e99',
                    Jade: '#25654e',
                    Apatite: '#003e48'
                }
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
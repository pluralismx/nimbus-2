<template>
    <div class="settings-container">
        <!-- Recipients -->
        <div class="options-block-container">
            <div class="options-header">
                <span>Seleccione los prospectos</span>
            </div>
            <div class="options-body">
                <div class="checkbox-block">
                    <input type="checkbox">
                    <label for="">Todos</label>
                </div>

                <div class="checkbox-block">
                    <input type="checkbox">
                    <label for="">Nuevos</label>
                </div>

                <div class="checkbox-block">
                    <input type="checkbox">
                    <label for="">Identificación</label>
                </div>

                <div class="checkbox-block">
                    <input type="checkbox">
                    <label for="">Presentación</label>
                </div>

                <div class="checkbox-block">
                    <input type="checkbox">
                    <label for="">Cotización</label>
                </div>

                <div class="checkbox-block">
                    <input type="checkbox">
                    <label for="">Negociación</label>
                </div>

                <div class="checkbox-block">
                    <input type="checkbox">
                    <label for="">Cerrados</label>
                </div>

                <div class="checkbox-block">
                    <input type="checkbox">
                    <label for="">Individual:</label>
                </div>

                <div class="checkbox-block">
                    <input type="text">
                </div>
                    
            </div>
        </div>
        <!-- Template -->
        <div class="options-block-container">
            <div class="options-header">
                <span>Seleccione el diseño</span>
            </div>
            <div class="options-body">
                <div class="checkbox-block">
                    <input type="radio">
                    <label for="">Plantilla</label>
                </div>
                <div class="checkbox-block">
                    <input type="radio">
                    <label for="">Personalizado</label>
                </div>
            </div>
        </div>
        <!-- Actions -->
        <div class="actions-block-container">
            <button class="btn-warning">
                Enviar
            </button>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'EmailRecipientsSettingsComponent'
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

    .checkbox-block {
        margin-bottom: .5rem;
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
<template>
    <section>

        <!-- Header and banner -->
        <div class="settings-container">
            <!-- Title -->
            <div class="settings-header">
                <span>Cabecera y pancarta</span>
            </div>
            <!-- Content -->
            <div class="settings-body">
                <!-- Logo -->
                <div class="image-input-block">
                    <label>Logotipo</label>
                    <div>
                        <input type="text">
                        <button class="btn-primary">imagen...</button>
                    </div>
                </div>
                <!-- Banner -->
                <div class="image-input-block">
                    <label>Pancarta</label>
                    <div>
                        <input type="text">
                        <button class="btn-primary">imagen...</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Introduction -->
        <div class="settings-container">
            <!-- Title -->
            <div class="settings-header">
                <span>Introducción</span>
            </div>

            <!-- Heading -->
            <div class="text-input-block">
                <label>Título</label>
                <div>
                    <input type="text">
                </div>
            </div>

            <!-- Content -->
            <div class="text-input-block">
                <label>Texto</label>
                <div>
                    <textarea></textarea>
                </div>
            </div>

        </div>

        <!-- Content -->
        <div class="settings-container">

            <!-- Title -->
            <div class="settings-header">
                <span>Contenido</span>
            </div>

            <!-- Image 1 -->
            <div class="image-input-block">
                <label>Imagen 1</label>
                <div>
                    <input type="text">
                    <button class="btn-primary">imagen...</button>
                </div>
            </div>

            <!-- Text 1 -->
            <div class="text-input-block">
                <label>Texto</label>
                <div>
                    <textarea></textarea>
                </div>
            </div>

            <!-- Image 2 -->
            <div class="image-input-block">
                <label>Imagen 2</label>
                <div>
                    <input type="text">
                    <button class="btn-primary">imagen...</button>
                </div>
            </div>

            <!-- Text 1 -->
            <div class="text-input-block">
                <label>Texto</label>
                <div>
                    <textarea></textarea>
                </div>
            </div>
        </div>

        <!-- Social -->
        <div class="settings-container">
            <!-- Title -->
            <div class="settings-header">
                <span>Redes sociales</span>
            </div>
            <!-- Content -->
            <div class="settings-body">
                <!-- Facebook -->
                <div class="text-input-block">
                    <label>Facebook URL</label>
                    <div>
                        <input type="text">
                    </div>
                </div>
                <!-- Instagram -->
                <div class="text-input-block">
                    <label>Instagram URL</label>
                    <div>
                        <input type="text">
                    </div>
                </div>
                <!-- Youtube -->
                <div class="text-input-block">
                    <label>Youtube URL</label>
                    <div>
                        <input type="text">
                    </div>
                </div>
            </div>
        </div>

        <!-- Contact -->
        <div class="settings-container">
            <!-- Title -->
            <div class="settings-header">
                <span>Contacto</span>
            </div>
            <!-- Content -->
            <div class="settings-body">
                <!-- Image -->
                <div class="image-input-block">
                    <label>Logotipo</label>
                    <div>
                        <input type="text">
                        <button class="btn-primary">imagen...</button>
                    </div>
                </div>
                <!-- Slogan -->
                <div class="text-input-block">
                    <label>Slogan</label>
                    <div>
                        <input type="text">
                    </div>
                </div>
                <!-- Address -->
                <div class="text-input-block">
                    <label>Dirección</label>
                    <div>
                        <input type="text">
                    </div>
                </div>
                <!-- E-mail -->
                <div class="text-input-block">
                    <label>E-mail</label>
                    <div>
                        <input type="text">
                    </div>
                </div>
                <!-- Phone -->
                <div class="text-input-block">
                    <label>Teléfono</label>
                    <div>
                        <input type="text">
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>
<script>
    export default {
        name: 'NewsLetterTemplateSettingsComponent'
    }
</script>
<style scoped>

    .settings-container {
        margin-top: 1rem;
    }

    .settings-header {
        background-color: var(--primary);
        color: var(--basic);
        padding: .5rem;
    }

    /* Image input block */

    .image-input-block {
        margin: 1rem 0;
    }

    .image-input-block div {
        margin-top: .5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .image-input-block input[type="text"] {
        width: 75%;
    }

    /* Text input block */

    .text-input-block {
        margin: 1rem 0;
    }

    .text-input-block div {
        margin-top: .5rem;
    }

    .text-input-block input[type="text"] {
        width: 100%;
        box-sizing: border-box;
    }

    .text-input-block textarea {
        box-sizing: border-box;
        width: 100%;
        height: 10rem;
        resize: none;
        border: none;
        font-family: 'Regular';
        padding: 4px;
    }
</style>
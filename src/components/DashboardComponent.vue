<template>
    <section>
        <h1>Nuestro equipo</h1>
        <hr>
        <div class="tarjeta-presentacion">
            <h3>Luis Enrique Luna Barrios</h3> 
            <p>
            Ing. En sistemas computacionales con 5 años de experiencia 
            en manejo de LMS en la Universidad Autónoma de Tamaulipas
            </p>
        </div>
        
        <div class="tarjeta-presentacion">
            <h3>Javier Alejandro Yuriar Jimenez</h3>
            <p>
                Soy , ing en desarrollo de software con 4 años de experiencia, 
                especializado como Fullstack y Web Dev principalmente con Java Y JS con frameworks spring. 
                Mi trabajo esta orientado al sector bancario y financiero, siendo 
                que desde mi primer empleo vengo laborando para dichas instituciones, 
                actualmente curso la maestria en sitios web por parte de UNIR y 
                espero terminarla en diciembre del 2024
            </p>
        </div>
        
        <div class="tarjeta-presentacion">
            <h3>Sergio Adrian Andujo Baeza</h3>
            <p>
                Originario de Chihuahua, Chihuahua. Tengo 8 años de experiencia en el area de calidad de software.
                Estoy especializado en pruebas manuales y de automatización. Las tecnologías que he utilizado son java y javascript, 
                mediante los frameworks de karate, mocha, jazmin, selenium, webdriverIO y playwright.
            </p>
        </div>

        <div class="tarjeta-presentacion">
            <h3>Gerardo Topete Perez</h3> 
            <p>
                Originario de Tijuana, egresó como Lic. en Administración de empresas. Tiene 4 años de experiencia con lenguajes
                como PHP, JS, SQL, CSS, y frameworks como Laravel, Angular, React y Vue.js
                y manejo de programación orientada a objetos
            </p>          
        </div>

    </section>
</template>
<script>
    export default {
        name: 'DashboardComponent'
    }
</script>
<style scoped>
    section {
        background-color: silver;
        padding: 2rem;
        box-sizing: border-box;
        height: 100%;
        overflow: auto;
    }
    h1 {
        margin: 0px;
    }
    .tarjeta-presentacion {
        background-color: brown;
        padding: 1rem;
        width: 600px;
        margin-bottom: 1rem;
        border-radius: .5rem;
        box-shadow: 2px 2px 3px #222;
        color: #ddd;

    }
    h3 {
        margin-top: 0px;
    }
    p {
        line-height: 1.5;
    }

</style>
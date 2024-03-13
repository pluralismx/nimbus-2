import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import './assets/global.css';

import LeadTableComponent from './components/LeadTableComponent.vue';

const routes = [
    { path: '/prospectos', component: LeadTableComponent }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).mount('#app');





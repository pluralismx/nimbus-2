import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import './assets/global.css';
import DashboardComponent from './components/DashboardComponent.vue';
import LeadTableComponent from './components/LeadTableComponent.vue';

const routes = [
    { path: '/', component: DashboardComponent },
    { path: '/home', component: DashboardComponent },
    { path: '/prospectos', component: LeadTableComponent }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).mount('#app');





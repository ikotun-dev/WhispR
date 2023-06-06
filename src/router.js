import { createRouter, createWebHistory } from "vue-router";
import loginForm from './components/loginForm';
import HeadChat from './components/HeadChat';

const routes = [
    {path : "/", component: loginForm},
    {path : "/home", component: HeadChat}

]
const router = createRouter({
    history: createWebHistory(),
    routes
})

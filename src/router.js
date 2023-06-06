import { createRouter, createWebHistory } from "vue-router";
import loginForm from './components/loginForm';
import HeadChat from './components/HeadChat';
import ChatPage from './components/ChatPage'

const routes = [
    {path : "/", component: loginForm},
    {path : "/home", component: HeadChat},
    {path : "/chatpage", component: ChatPage}

]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

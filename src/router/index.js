import {createRouter, createWebHistory} from 'vue-router'
import MainPage from "../views/MainPage";
import UserProfile from "../views/UserProfile";
import ConversationView from "@/views/ConversationView";
import {reactive} from "@vue/reactivity";
import axiosConfig from "../axiosConfig";
import state from "@/state";

const routes = [
    {
        path: '/',
        redirect: '/MainPage',
        component: MainPage
    },
    {
        path: '/MainPage',
        name: 'MainPage',
        component: MainPage
    },
    {
        path: '/Conversation',
        component: ConversationView
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

//const history = createWebHistory();


export default router;

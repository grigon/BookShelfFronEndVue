import { createRouter, createWebHistory } from 'vue-router'
import ConversationView from "@/views/ConversationView";
import MainPageView from "@/views/MainPageView";

const history = createWebHistory();
const router = createRouter({
    history,
    routes: [
        {
            path: '/Conversation',
            component: ConversationView
        },
        {
            path: '/',
            component: MainPageView,
        }
    ]
});

export default router;

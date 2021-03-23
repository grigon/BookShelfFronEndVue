import {createRouter, createWebHistory} from 'vue-router'
import MainPage from "../views/MainPage";
import UserProfile from "../views/UserProfile";
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
        path: '/UserProfile',
        name: 'UserProfile',
        component: UserProfile,
        beforeEnter: async function (to, from, next) {
            const user = reactive(state);
            axiosConfig.get(`/api/users/email/${user.user.email}`, {}
            )
                .then((response) => {
                        if (response.status === 200) {
                            console.log("Success, user retrieved from db")
                            user.user.name = response.data.userName;
                            user.user.city = response.data.city;
                            user.user.photoPath = response.data.photoPath;
                        }
                        console.log(response);
                    }, (error) => {
                        state.successMessage.value = "Failed to retrieve user form db."
                        user.user.loggedIn = "false";
                        console.log(error.message);
                    }
                )
            next()
        }
    }


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

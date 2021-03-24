import {createRouter, createWebHistory} from 'vue-router'
import MainPage from "../views/MainPage";
import UserProfile from "../views/UserProfile";
import {reactive} from "@vue/reactivity";
import axiosConfig from "../axiosConfig";
import state from "@/state";
import SignInForm from "../components/SignInForm"

const user = reactive(state);

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
            axiosConfig.get(`/api/users/${localStorage.getItem("Id")}`, {}
            )
                .then((response) => {
                    console.log(response.data)
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

router.beforeEach((to, from, next) => {
    if(user.user.loggedIn === "true"){
        localStorage.setItem("AccessToken", user.user.AccessToken);
        localStorage.setItem("TokenExpirationTime", user.user.TokenExpirationTime);
        localStorage.setItem("name", user.user.name)
        localStorage.setItem("photoPath", user.user.photoPath)
        localStorage.setItem("city", user.user.city.toString())
        localStorage.setItem("loggedIn", "true")
        localStorage.setItem("RefreshToken", user.user.RefreshToken)

    }
    user.user.AccessToken =  localStorage.getItem("AccessToken")
    user.user.TokenExpirationTime =  localStorage.getItem("TokenExpirationTime")
    user.user.name = localStorage.getItem("name")
    user.user.photoPath = localStorage.getItem("photoPath")
    user.user.city = localStorage.getItem("city")
    user.user.loggedIn = localStorage.getItem("loggedIn")
    user.user.RefreshToken = localStorage.getItem("RefreshToken")
    next()
});

export default router

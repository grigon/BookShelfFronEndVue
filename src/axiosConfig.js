import state from "@/state";
import axios from 'axios';
import {reactive} from "@vue/reactivity";
import SignInForm from "./components/SignInForm"
import DropDownMenu from "./components/DropDownMenu"
import router from "./router";

const user = reactive(state);

const instance = axios.create({
// .. where we make our configurations
});

// Where you would set stuff like your 'Authorization' header, etc ...
instance.defaults.headers.common['Authorization'] = user.user.AccessToken;

// Also add/ configure interceptors && all the other cool stuff

instance.interceptors.request.use(function (config) {
    config.headers.Authorization = 'Bearer ' + user.user.AccessToken;
    return config;
});

instance.interceptors.response.use(function (response) {
    return response
}, function (error) {
    console.log(error.response.data)
    if (error.response.status === 401) {
        /*router.push('/MainPage')*/
    }
    return Promise.reject(error)
})


export default instance;
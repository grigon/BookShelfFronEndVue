import state from "@/state";
import axios from 'axios';
import {reactive} from "@vue/reactivity";

const user = reactive(state);

const instance = axios.create({
// .. where we make our configurations
});

// Where you would set stuff like your 'Authorization' header, etc ...
instance.defaults.headers.common['Authorization'] = user.user.AccessToken;

// Also add/ configure interceptors && all the other cool stuff

instance.interceptors.request.use(function (config) {
    config.headers.Authorization ='Bearer ' + user.user.AccessToken;
    return config;
});

export default instance;
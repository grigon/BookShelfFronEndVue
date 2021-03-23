import {reactive} from "@vue/reactivity";
import axios from "axios";

const user = reactive(state);

axios.interceptors.request.use(function (config) {
    const token = user.user.AccessToken;
    config.headers.Authorization =  token;
    return config;
});

(function() {
    const token = user.user.AccessToken;
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        axios.defaults.headers.common['Authorization'] = null;
        /*if setting null does not remove `Authorization` header then try
          delete axios.defaults.headers.common['Authorization'];
        */
    }

export default {

};



})();
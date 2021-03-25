import useVuelidate from "@vuelidate/core";
import UserModel from "../models/UserModel";
import {reactive} from "@vue/reactivity";
import {ref} from "vue";

export default {
    user: reactive(new UserModel()),
    errorMessage: ref(""),
    successMessage: ref(""),

    toModel(){
        const rules = {
            user: this.user.rules,
        };

        return useVuelidate(rules, this);
    },

    clearMessages(){
        if(this.errorMessage.value)
            this.errorMessage.value = "";
        if(this.successMessage.value)
            this.successMessage.value = "";
    },

    clearUserData(){
        const user = this.user;
        this.successMessage.value = ""
        user.loggedIn = "false";
        user.AccessToken = "";
        user.email = "";
        user.name = "";
        user.city = "";
        user.password = "";
        user.RefreshToken = "";
        user.TokenExpirationTime = "";
        localStorage.setItem("loggedIn", "false");
        localStorage.setItem("city", "");
        localStorage.setItem("photoPath", "");
        localStorage.setItem("name", "");
        localStorage.setItem("RefreshToken", "");
        localStorage.setItem("TokenExpirationTime", "");
        localStorage.setItem("AccessToken", "");
    }



};
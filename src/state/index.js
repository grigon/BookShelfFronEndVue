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

};

import {reactive} from "@vue/reactivity";
import {ref} from "vue";
import useVuelidate from "@vuelidate/core";
import UserModel from "../models/UserModel";

export default {
    user: reactive(new UserModel()),
    errorMessage: ref(""),

    toModel(){
        const rules = {
            user: this.user.rules,
        };

        return useVuelidate(rules, this);
    }
};
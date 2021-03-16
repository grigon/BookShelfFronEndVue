import {ref} from "vue";
import {email, minLength, required} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import {passwordValidator} from "../validators";

export default class UserModel {
    name = ref("");
    email = ref("");
    password = ref("");
    city = ref("");

    get rules() {
        return {
            name: {required, minLength: minLength(5)},
            email: {email},
            city: {required, minLength: minLength(2), },
            password: {required, passwordValidator, minLength: minLength(8)}
        }
    }

    toModel() {
        return useVuelidate(this.rules, this);
    }
}
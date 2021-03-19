import {email, helpers, minLength, required} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import {ref} from "vue";

export default class UserModel {
    name = ref("");
    email = ref("");
    password = ref("");
    city = ref("");
    loggedIn = ref("");
    AccessToken = ref("");
    RefreshToken = ref("");
    TokenExpirationTime = ref("");


    get rules() {
        return {
            name: {required, minLength: minLength(5)},
            email: {email},
            city: {required, minLength: minLength(2),},
            password: {
                required,
                containsUppercase: function (value) {
                    return /[A-Z]/.test(value)
                },
                containsLowercase: function (value) {
                    return /[a-z]/.test(value)
                },
                containsNumber: function (value) {
                    return /[0-9]/.test(value)
                },
                containsSpecial: function (value) {
                    return /[#?!@$%^&*-]/.test(value)
                },
                minLength: minLength(8)
            }
        }
    }

    toModel() {
        return useVuelidate(this.rules, this);
    }

}
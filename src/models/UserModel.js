import {email, helpers, minLength, required} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import {passwordValidator} from "../validators";
import {ref} from "vue";

/*const containsUppercase = helpers.regex("containsUppercase", /[A-Z]/);*/
/*const containsLowercase = helpers.regex("Contain lowercase",/[a-z]/);
const containsNumber = helpers.regex(" Contain number",/[0-9]/);
const containsSpecial = helpers.regex("Contain special character",/[#?!@$%^&*-]/);*/

/*const checkvals = (value) => {
    if(containsUppercase) {
        return true
    } else{
        return false
    }
}

const containsUppercase1 = value => {
    if (typeof value === 'undefined' || value === null || value === '') {
        return true
    }
    return /^[a-zA-Z\s]+$/g.test(value)
}
*/

/*const containsUppercase = (value) => value.indexOf('cool') >= 0*/


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
            password: {
                required,
                containsUppercase: function(value) {
                    return /[A-Z]/.test(value)
                },
                containsLowercase: function(value) {
                    return /[a-z]/.test(value)
                },
                containsNumber: function(value) {
                    return /[0-9]/.test(value)
                },
                containsSpecial: function(value) {
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
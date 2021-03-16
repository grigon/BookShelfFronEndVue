import {required} from "@vuelidate/validators";

export const passwordValidator = {
    $validator: val => {
        if (value === 'undefined' || value === null || value === '') {
            return true
        }
        const containsUppercase = /[A-Z]/.test(value)
        const containsLowercase = /[a-z]/.test(value)
        const containsNumber = /[0-9]/.test(value)
        const containsSpecial = /[#?!@$%^&*-]/.test(value)
        return containsUppercase && containsLowercase && containsNumber && containsSpecial
    },

    $message: "Password should contain lowercase and capital letter, number and special character."
};

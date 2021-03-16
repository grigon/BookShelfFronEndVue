import {ref} from "vue";
import {required} from "@vuelidate/validators";
import {creditcard} from "@/validators";
import useVuelidate from "@vuelidate/core";

export default class CreditCardModel {
    number = ref("");
    nameOnCard = ref("");
    expirationMonth = ref(1);
    expirationYear = ref(2020);
    cvv = ref("");

    get rules() {
        return {
            number: {required, creditcard},
            nameOnCard: {required},
            expirationMonth: {required},
            expirationYear: {required},
            cvv: {required},
        };
    }

    toModel() {
        return useVuelidate(this.rules, this);
    }
}
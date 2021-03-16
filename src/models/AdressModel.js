import {ref} from "vue";
import {minLength, required} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

export default class AddressModel {
    address1 = ref("");
    address2 = ref("");
    city = ref("");
    state = ref("");
    zip = ref("");

    clear() {
        this.address1.value = "";
        this.address2.value = "";
        this.city.value = "";
        this.state.value = "";
        this.zip.value = "";
    }

    get rules() {
        return {
            address1: {required, minLength: minLength(5)},
            address2: {},
            city: {required, minLength: minLength(2)},
            state: {required},
            zip: {required, minLength: minLength(5)},
        }
    }

    toModel() {
        return useVuelidate(this.rules, this);
    }
}
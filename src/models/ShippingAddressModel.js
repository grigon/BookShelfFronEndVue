import AddressModel from "@/models/AdressModel";
import {ref} from "vue";
import {required} from "@vuelidate/validators";

export default class ShippingAddressModel extends AddressModel {
    name = ref("");
    company = ref("");

    get rules() {
        return Object.assign({
            name: {required},
            company: {},
        }, super.rules);
    }
}
import AddressModel from "@/models/AdressModel";
import {ref} from "vue";

export  default class BillingAdressModel extends AddressModel {
    sameAsShipping = ref(false);

    get rules() {
        return Object.assign({sameAsShipping: {}  }, super.rules)
    }
}


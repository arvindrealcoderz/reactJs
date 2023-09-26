import axios from "axios"
import { userInit } from "@/init/init"
import { appStore } from "@/store/store"
export class ServiceCall {
    static fnGetUser(url) {
        return axios.get(url);
    }
}

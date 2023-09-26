import { ServiceCall } from "../common/ServiceCall";
import { appStore } from "@/store/store";
export const UserAction = () => {
    ServiceCall.fnGetUser('https://dummyjson.com/users').then((res) => appStore.dispatch({
        type: "USER_UPDATE",
        payload: res.data
    })).catch(err => console.log(err))

}
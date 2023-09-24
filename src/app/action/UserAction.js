import { ServiceCall } from "../common/ServiceCall"
export const UserAction=()=>{
    ServiceCall.fnGetUser('https://dummyjson.com/users');
}
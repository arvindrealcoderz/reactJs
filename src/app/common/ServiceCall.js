import axios from "axios"

export class ServiceCall{
    static fnGetUser(url){
        axios.get(url).then((res)=>console.log(res)).catch((err)=>console.log(err))
    }
}

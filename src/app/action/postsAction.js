import { appStore } from "@/store/store";

const { ServiceCall } = require("../common/ServiceCall")

export const postsAction=()=>{
    ServiceCall.fnGetUser('https://dummyjson.com/posts')
    .then((res)=>appStore.dispatch({
        type:"POSTS",
        payload:res.data
    }))
    .catch((err)=>console.log(err));
}
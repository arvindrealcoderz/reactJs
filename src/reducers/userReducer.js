import { userInit } from "@/init/init"
export const userReducer=(state =userInit, action)=>{
    switch(action.type){
        case "USER_UPDATE" :
           return { ...state ,
                 users:action.payload
                }
        break;
    }
    return state;

}
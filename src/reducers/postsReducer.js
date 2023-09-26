

import { userInit } from "@/init/init"

export const postReducer=(state=userInit ,action )=>{
    switch(action.type){
        case 'POSTS' :
            state={
                ...state ,
                posts:action.payload.posts
            }
            break;
    }
    return state;
}
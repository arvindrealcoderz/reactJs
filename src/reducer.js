import { init } from "./init"

export const appReducer=(state=init, action)=>{
    switch (action.type) {
        case "Name" : state={
            ...state,
            name:action.payload.name,
            email:action.payload.email,
            password:action.payload.password,
            mobile:action.payload.mobile
        }
        break;
        default:
            break;
    }
    return state;
}
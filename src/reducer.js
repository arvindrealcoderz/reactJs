import { init } from "./init"

export const appReducer=(currData=init, newData)=>{
    switch (newData.type) {
        case "Name" : currData={
            ...currData,
            name:newData.payload.name,
            email:newData.payload.email,
            password:newData.payload.password,
            mobile:newData.payload.mobile
        }
        break;
        case "Loc" : currData={
            ...currData,
            loc:newData.payload
        }
        break;

    
        default:
            break;
    }
    return currData;
}
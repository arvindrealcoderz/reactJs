import { init } from "./init"

export const appReducer=(currData=init, newData)=>{
    console.log(currData)
    console.log(newData)
    
    switch (newData.type) {
        case "Name" : currData={
            ...currData,
            name:newData.payload
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
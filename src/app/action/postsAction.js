const { ServiceCall } = require("../common/ServiceCall")

export const postsAction=()=>{
    ServiceCall.fnGetUser();
}
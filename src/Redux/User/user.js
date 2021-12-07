const init=[
]


const User = (state=init,action)=>{
    switch (action.type) {
    
//     case "remove":{
//        return action.payload;
// }
// case "add":{
//     return action.payload;
// }
//     case "update":{
//         return action.payload;
//     }
    case "set":{
        return action.payload;
 }

        default:
            return(state);
    }
}
export default User;
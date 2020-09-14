
const initState={
    value:0
};

const reducer =(state=initState,action)=>{

    console.log(action)
    console.log(state)

    switch(action.type){
        case "send_type":
            return Object.assign({},state,action)
        case "add":
                return state+1
        default:
            return state

    };
}

module.exports={reducer}


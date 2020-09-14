
const initState = {
    value: 0
};

const reducer = (state = initState, action) => {

    //console.log(action)
    //console.log(state)

    const value = state.value + 1
    switch (action.type) {
        case "send_type":
            return Object.assign({}, state, action)
        case "add":
            return { value }
        default:
            return state

    };
}

module.exports = { reducer }


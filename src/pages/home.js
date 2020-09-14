import React, { Component } from 'react';
import store from '../store'
import sendAction from '../action'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleClick=()=>{
        const action =sendAction();
        store.dispatch(action)

    }

    componentDidMount(){
        store.subscribe(()=>{
            console.log("subscribe",store.getState())
            this.setState({})
        })
    }

    render() { 
        return ( 
            <>
            <button onClick={this.handleClick}>按钮</button>
            <div>{store.getState().value}</div>
            </>
         );
    }
}
 
export default Home;
import React, { Component } from 'react';
import {connect} from 'react-redux'

class PageLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleClick=()=>{
        console.log(this.props)
        this.props.add()
    }

    render() { 
        return ( 
        <>
        <button onClick={this.handleClick}> +++++  </button>
        </> );
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        add:()=>{
            dispatch({type:"add"})
        }
    }
}
 
 
export default connect(null,mapDispatchToProps)(PageLeft);
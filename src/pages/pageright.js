import React, { Component } from 'react';
import {connect} from 'react-redux'

class PageRight extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount(){
        console.log("props",this.props)
    }
    render() {
        return (
            <>
                {this.props.value}
            </>);
    }
}

const mapStateToProps=(state)=>{
    console.log("state",state)
    return state
}

export default connect(mapStateToProps)(PageRight);
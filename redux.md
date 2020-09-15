## 1.redux入门



```
 npm install --save redux
```



1.Component调用store.dispatch(action),将数据发送到reducer

2.reducer执行函数后，return数据到store

3.store数据发送改变，component通过store.subscribe监听改变

### 1.1.action

构建aciton，通过创建函数返回对象，对象必须携带type属性

```js
const sendAction=()=>{

    return {
        type:"send_type",
        value:"this is send_type"
    }
};


module.exports={sendAction}
```



### 1.2.reducer

构建reducer，用来响应action，然后通过return把数据传回store

```js

const reducer =(state=initState,action)=>{

    switch(action.type){
        case "send_type":
            return Object.assign({},state,action)
        default:
            return state

    };
}

module.exports={reducer}

```





### 1.3.store

```js
import {createStore} from "redux"

//导入reducer
import {reducer} from "../reducer/index"

//构建store
const store=createStore(reducer)


export default store;
```



#### 1.3.1 createStore

createStore来构建store，传递我们写好的reducer

#### 1.3.2 subscribe

store.subscribe()注册监听

#### 1.3.3 dispatch

利用store.dispatch()发送action的时候就能触发我们的监听，在里面利用store.getState()就能获取值



### 1.3.4 使用示例

```js
import React, { Component } from 'react';

import store from '../store'
import {sendAction} from '../action'

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
```



## 2. export default与module.exports区别



## 3.react-redux



![](.\数据流转.png)

yarn add react-redux

npm install react-redux

还需要安装redux

### 3.1.reducer

```js

const initState = {
    value: 0
};

const reducer = (state = initState, action) => {

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
```

### 3.2.store

```js

import {createStore} from "redux"

//导入reducer
import {reducer} from "../reducer/index"

//构建store
const store=createStore(reducer)


export default store;

```



### 3.3.Provider



Provider需要包裹组件最外层，Provider包裹的组件可以通过connect加强

```js
import React from 'react';
import './App.css';
import PageLeft from './pages/pageleft'
import PageRight from './pages/pageright'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <div>
      <Provider store={store}>
        <PageLeft />
        <PageRight />
      </Provider>
    </div>
  );
}

export default App;

```



### 3.4. 发送action组件



实现connect的第二个参数mapDispatchToProps，connect加强组件，通过this.props获取action

```js
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
```



### 3.5. 接收组件



接收connect第一个参数，mapStateToProps（state），state是reducer返回的数据

```js
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
```




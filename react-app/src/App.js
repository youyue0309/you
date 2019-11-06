import React,{Component} from 'react';
import store from './store';
import Add from './action';

class App extends Component{
    render(){
        return(
            <div>
                fff
                <button onClick={()=>{
                    store.dispatch(Add());
                }
                }>click+1</button>
            </div>
        )
    }
}
export default App;
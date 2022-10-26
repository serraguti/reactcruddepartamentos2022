import React, { Component } from 'react';
import axios from 'axios';
import Global from './../Global';
import loading from './../assets/images/loading.gif';

export default class Departamentos extends Component {
    state = {
        departamentos: [],
        status: false
    }


  render() {
        //ESTO ES JAVASCRIPT
        if (this.state.status == false){
            //LOADING
            return (<div>
                <img src={loading}/>
            </div>)
        }else{
            //PINTAMOS NUESTRO DIBUJO
            return (
                <div>
                    <h1>Departamentos</h1>
                </div>
            )
        }
    }
}

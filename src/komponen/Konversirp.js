import React, { Component } from 'react';
import axios from 'axios'
import './Konversirp.css'

class Konversirp extends Component{
    constructor(){
        super();
        this.state = {
        }
    }
    componentDidMount(){
        var url ='https://blockchain.info/tobtc?currency=USD&value=500'
        axios.get(url)
        .then((getapi)=>{
            console.log(getapi.data)
            this.setState({
                btc:getapi.data })
            })
        }

    konversi(){
        var inputnumber=this.refs.input.value ;
        var resultin = inputnumber/14000 * this.state.btc
        var resultround = resultin.toFixed(6)
        this.setState({userinput:inputnumber,result:resultround})
    }
    
    render(){
        return (
            <div className='container'> <center>
                <h1>Konveri Rupiah ke Bitcoin </h1>
                <h4>Kurs 1 USD = 14.000 IDR </h4> <br/>
                <input onInput={()=>{this.konversi()}} ref='input' type='number' className='myinput form-control' placeholder='Input Number'/>
                <br/>
                <h3>RP {this.state.userinput} = BTC {this.state.result} </h3>
            </center> 
            </div>
          
        )
    }
}

export default Konversirp;
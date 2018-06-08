import React, { Component } from 'react';
import axios from 'axios'
import './Konversibit.css'



class Konversibit extends Component{
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
            var resultin = inputnumber/this.state.btc*14000
            var resultround = resultin.toFixed(6)
            this.setState({userinput:inputnumber,result:resultround})
        }
        
    render(){
        return (
            <div className='container'> <center>
                <h1>Konveri Bitcoin ke Rupiah </h1>
                <h4>Kurs 1 USD = 14.000 IDR </h4> <br/>
                <input onInput={()=>{this.konversi()}} ref='input' type='number' className='myinput form-control' placeholder='Input Number'/>
                <br/>
                <h3>BTC {this.state.userinput} = RP {this.state.result} </h3>
            </center> 
            </div>
            
        )
    }
}

export default Konversibit;
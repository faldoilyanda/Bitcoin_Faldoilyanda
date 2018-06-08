import React, { Component } from 'react';
import axios from 'axios'
import './Tabelharga.css'


class Tabelharga extends Component {
    constructor(){
        super();
        this.state = {
            buy:'',
            sell:''
        }
    }

    componentDidMount(){
        var url ='https://blockchain.info/ticker'
        axios.get(url)
        .then((getapi)=>{
            console.log(getapi.data.USD.buy)
            this.setState({
                buyAUD:getapi.data.AUD.buy,
                sellAUD:getapi.data.AUD.sell,
                buyEUR:getapi.data.EUR.buy,
                sellEUR:getapi.data.EUR.sell,
                buyGBP:getapi.data.GBP.buy,
                sellGBP:getapi.data.GBP.sell,
                buyJPY:getapi.data.JPY.buy,
                sellJPY:getapi.data.JPY.sell,
                buyUSD:getapi.data.USD.buy,
                sellUSD:getapi.data.USD.sell,
            })
        })
    }
    
  render() {

    return (
      <div className='container'><center>
        <h1> Harga BitCoin Hari Ini </h1>
        <table className='mytable'>
            <tr> <th> Mata Uang </th>
                    <th> Harga Beli BitCoin </th>
                    <th> Harga Jual BitCoin </th>
            </tr>
            
            <tr> <td> Dollar Australia </td>
                <td> {this.state.buyAUD} </td>
                <td> {this.state.sellAUD}</td>
            </tr>
            <tr> <td> Euro Eropa </td>
                <td> {this.state.buyEUR} </td>
                <td> {this.state.sellEUR}</td>
            </tr>
            <tr> <td> Pondsterling Inggris </td>
                <td> {this.state.buyGBP} </td>
                <td> {this.state.sellGBP}</td>
            </tr>
            <tr> <td> Yen Jepang</td>
                <td> {this.state.buyJPY} </td>
                <td> {this.state.sellJPY}</td>
            </tr>
            <tr> <td> Dollar Amerika </td>
                <td> {this.state.buyUSD} </td>
                <td> {this.state.sellUSD}</td>
            </tr>
            
        </table>
        </center>
      </div>
    );
  }
}

export default Tabelharga;

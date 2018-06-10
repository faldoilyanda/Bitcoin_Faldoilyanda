// import React, { Component } from 'react';
// import axios from 'axios'
// import './Konversirp.css'

// class Konversirp extends Component{
//     constructor(){
//         super();
//         this.state = {
//         }
//     }
//     componentDidMount(){
//         var url ='https://blockchain.info/tobtc?currency=USD&value=500'
//         axios.get(url)
//         .then((getapi)=>{
//             console.log(getapi.data)
//             this.setState({
//                 btc:getapi.data })
//             })
//         }

//     konversi(){
//         var inputnumber=this.refs.input.value ;
//         var resultin = inputnumber/14000 * this.state.btc
//         var resultround = resultin.toFixed(6)
//         this.setState({userinput:inputnumber,result:resultround})
//     }
    
//     render(){
//         return (
//             <div className='container'> <center>
//                 <h1>Konveri Rupiah ke Bitcoin </h1>
//                 <h4>Kurs 1 USD = 14.000 IDR </h4> <br/>
//                 <input onInput={()=>{this.konversi()}} ref='input' type='number' className='myinput form-control' placeholder='Input Number'/>
//                 <br/>
//                 <h3>RP {this.state.userinput} = BTC {this.state.result} </h3>
//             </center> 
//             </div>
          
//         )
//     }
// }

// export default Konversirp;



import React, { Component } from 'react';
import './Konversirp.css'

import axios from 'axios';

class Konversirp extends Component {

  state = {
    input:null,
    repos: null,
    seriesName:null,
  }
    

  onSeriesInputChange = e =>{
    this.setState({ seriesName:e.target.value});
    axios.get(`https://blockchain.info/tobtc?currency=USD&value=${e.target.value/14000}`)
    .then((ambilData) => {  
      console.log(ambilData);
      this.setState({
        hasil: ambilData.data,
        })
        
     })
  }
    
    render() {

      const{seriesName} = this.state;

     return (

        <div>
        <center>
          <br/>
          <h3>Konversi Rupiah ke Bitcoin </h3>
            <h5>Kurs 1 USD = 14.000 IDR</h5>
            
          <br/>
          <input value = {seriesName} type="number" onInput={this.onSeriesInputChange} style={{width:'400px'}}/>
          <br/>
          { this.state.seriesName ? <h4>Rp {seriesName} &nbsp; BTC {this.state.hasil}</h4> :
          <div>
          <br/> 
          <h4 className="btn btn-default">⇡ Input Nominal Rupiah ⇡</h4> 
          </div>}

        </center>

        </div>
        );
       }
     }
    

export default Konversirp;

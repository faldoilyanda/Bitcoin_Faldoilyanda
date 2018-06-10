// import React, { Component } from 'react';
// import axios from 'axios'
// import './Konversibit.css'



// class Konversibit extends Component{
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

//         konversi(){
//             var inputnumber=this.refs.input.value ;
//             var resultin = inputnumber/this.state.btc*14000
//             var resultround = resultin.toFixed(6)
//             this.setState({userinput:inputnumber,result:resultround})
//         }
        
//     render(){
//         return (
//             <div className='container'> <center>
//                 <h1>Konveri Bitcoin ke Rupiah </h1>
//                 <h4>Kurs 1 USD = 14.000 IDR </h4> <br/>
//                 <input onInput={()=>{this.konversi()}} ref='input' type='number' className='myinput form-control' placeholder='Input Number'/>
//                 <br/>
//                 <h3>BTC {this.state.userinput} = RP {this.state.result} </h3>
//             </center> 
//             </div>
            
//         )
//     }
// }

// export default Konversibit;




import React, { Component } from 'react';
import './Konversibit.css'
import axios from 'axios';

class Konversibit extends Component {

  state = {
    input:null,
    repos:null,
    masuk:null,
  }
    

  onSeriesInputChange = e =>{
    this.setState({ masuk:e.target.value});
    axios.get(`https://blockchain.info/tobtc?currency=USD&value=${e.target.value}`)
    .then((ambilData) => {  
      console.log(ambilData);
      this.setState({
        hasil: (this.state.masuk*14000)/ambilData.data,
        })
        
     })
  }
    
    render() {
      const{masuk} = this.state;
      
     return (

        <div>
        <center>
          <br/>
          <h3>Konversi Bitcoin ke Rupiah </h3>
            <h5>Kurs 1 USD = 14.000 IDR</h5>
            
          <br/>
          <input value = {masuk} type="number" onInput={this.onSeriesInputChange} style={{width:'400px'}}/>
          <br/>
          { this.state.masuk ? <h4>BTC {masuk} &nbsp; Rp {this.state.hasil}</h4> :
          <div>
           <br/> 
          <h4 className="btn btn-default" >⇡ Input Nominal Bitcoin ⇡</h4>
          </div>
           }

        </center>

        </div>
        );
       }
     }
    

export default Konversibit;





// import React, { Component } from 'react';
// import axios from 'axios'
// import './Konversibit.css'

// class Konversibit extends Component {
//     constructor(){
//         super();
//         this.state = {
//             rupiah : '',
//         }
//     }
//     componentDidMount(){
//         var url ='https://blockchain.info/tobtc?currency=USD&value=500'
//         axios.get(url).then((getData)=>{
//             this.setState({
//                 // btc:getData.data
//                 rupiah: (500 * 14000)/getData.data
//             })
//         })
//     }
//     convertBitcoin(){
//         var nilaiInput = this.refs.input.value ;
//         // var hasil = nilaiInput/this.state.btc*14000
//         var hasil = nilaiInput * this.state.rupiah;
//         var pembulatan = hasil.toFixed(6)
//         this.setState({
//             userinput:nilaiInput,result:pembulatan
//         })
//     }
    
//     render() {
//       var bagian = this.state.hasil / {seriesName}
//       const{seriesName} = this.state;
//     return (
//         <div>
//           <center>
//             <div className="container">
//                 <div className="col-md-8 col-md-offset-3">
//                     <h3><b>Konversi Bitcoin ke Rupiah</b></h3>
//                     <h5 style={{marginBottom: '20px'}}>Kurs 1 USD = 14.000 IDR</h5>
//                     <input onInput={()=>{this.convertBitcoin()}} ref='input' type='number' style={{width:'400px', marginBottom: '20px'}}/>
//                     <div className="well well-sm" style={{width:'500px', backgroundColor: 'yellow'}}>BTC {this.state.userinput} = RP {this.state.result} </div>
//                 </div>
//             </div>
//             </center>
//         </div>
//         );
//        }
//      }
// export default Konversibit;



import React, { Component } from 'react';
import './App.css';
import {Link,Route} from 'react-router-dom'
import Tabelharga from './komponen/Tabelharga'
import Konversibit from './komponen/Konversibit'
import Konversirp from './komponen/Konversirp'

class App extends Component {
  render() {
    return (
      <div className='container all' >
      <center>
        
      

        <div className='row'>
				<div>
          <div className='list-group mylist'>
          <Link to ='/tabelharga' className="btn btn-info">TABEL HARGA BITCOIN</Link>
          <Link to ='/konversirp' className="btn btn-info">KONVERSI NILAI Rp KE BITCOIN</Link>
          <Link to ='/konversibit' className="btn btn-info">KONVERSI NILAI BITCOIN KE Rp</Link>
          </div>
           
        </div>

        <div>
          <Route path='/' component={'Home'} />
          <Route path='/tabelharga' component={Tabelharga} />
          <Route path='/konversirp' component={Konversirp} />
          <Route path='/konversibit' component={Konversibit} />
        </div>
        </div>
        </center>
      </div>
    );
  }
}

export default App;


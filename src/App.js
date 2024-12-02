import logo from './logo.svg';
import './App.css';
import Login from './components/login_page';
import SignUp from './components/signup_page';
import Land from './land';
import {BrowserRouter, Routes,Route, Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';

const Page = () =>{
  const [arr,set_arr] = useState([
    {
        name:"san",
        pass:123,
    },
    {
        name:"rithu",
        pass:1234,
    }
])
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login arr={arr} set_arr={set_arr}/>}>Login</Route>
      <Route path="/SignUp" element={<SignUp arr={arr} set_arr={set_arr}/>}>Sign Up</Route>
      <Route path='/land' element={<Land/>}/>
    </Routes>
    </BrowserRouter>
  )
}
function App() {
  return (
   /* <div className="App">
     <div>
      <Head/>
      <div className='box'>
      <Body one="23 deg" two="Chennai" color="blue"/>
      <Body one="20 December" two="14:02:34" color="red"/>
      <Body one="Built Using" two="React" color="orange"/>
      </div>
      <div style={{marginTop:"2%"}}>
        <Tail/>
      </div>
     </div>
    </div>*/
    <div>
      <Page/>
    </div>
  );
}

export default App;

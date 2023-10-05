import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import {  ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
    
      <ToastContainer theme='colored'></ToastContainer>
    <Routes>
      
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      
     </Routes>
    
    </>
  );
}

export default App;
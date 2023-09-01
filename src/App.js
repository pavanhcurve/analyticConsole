// import logo from './logo.svg';
import './Style.css';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header';
// import Home from './component/Home';
import Userlist from './component/UserList';
import Footer from './component/Footer';
import Adduser from './component/Adduser';
import Edituser from './component/Edituser';
import Analytics from './component/Analytics';
import Reduction from './component/Reduction';
import Democ from './component/Democ';

function App() {
  return (
    <div className="App">

      <Header/>
      <Routes>
        {/* <Route path="/" element = {<Home/>}/> */}
        <Route path="/" element = {<Userlist/>}/>
        <Route path="/adduser" element = {<Adduser/>}/>
        <Route path="/edituser/:id" element = {<Edituser/>}/>
        <Route path="/analytics" element = {<Analytics/>}/>
        <Route path="/reduction" element = {<Reduction/>}/>
        <Route path="/democ" element = {<Democ/>}/>
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;

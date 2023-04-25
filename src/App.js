
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
 <Navbar title="TextUtils"/>
 <div className="container my-3">
 <TextForm texthere="Enter the text to analyze below"/>
 {/* <About/> */}

 </div>
    </>
   
  );
}

export default App;

import './App.css';
import { Appbar } from './components/Appbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';
import { Projects } from './components/Project';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Skill } from './components/Skill';
import { Contact } from './components/Contact';


function App() {
  return (
    <div className="App">
        <Appbar/>
        <Banner/>
        <About/>
        <Skill/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;

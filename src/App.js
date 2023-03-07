import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import AddPet from "./components/pages/AddPet/AddPet";
import EditPet from "./components/pages/EditPet/EditPet";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import Playtime from "./components/pages/Playtime/Playtime";
import Medical from "./components/pages/Medical/Medical";
import Diet from "./components/pages/Diet/Diet";
import Custom from "./components/pages/CustomNotes/CustomNotes";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/addPet'>
              <AddPet />
            </Route>
            <Route path='/editPet'>
              <EditPet />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/playtime'>
              <Playtime />
            </Route>
            <Route path='/medical'>
              <Medical />
            </Route>
            <Route path='/diet'>
              <Diet />
            </Route>
            <Route path='/custom'>
              <Custom />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

import NavBar from '../src/components/navBar/navBar.js'
import Home from './components/pages/home/home.js';
import { BrowserRouter as Router, Switch, Route, withRouter  } from 'react-router-dom';
import './app.css';
import Bio from './components/pages/bio/bio.js';
import Services from './components/pages/services/services.js';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Contact from './components/pages/contact/contact.js';

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
     key={location.key}
      classNames="page"
       timeout={500}
       unmountOnExit
       >
      <Switch location={location}>
          <Route path={['/', '/home']} exact component={Home} />
          <Route path='/bio' exact component={Bio} />
          <Route path='/services' exact component={Services} />
          <Route path='/contact' exact component={Contact}/> 
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));


function App() {


  return (
    <>

      <Router>
        <NavBar />
        <AnimatedSwitch/>
      </Router>
    </>
  );
}

export default App;

import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
  Link,
  NavLink
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
export default function App() {
  return (
    <Router>
      <div >
        {/* Header will be yellow */}
        <header className="basicheader">
          {/* Site title */}
          <h1>this is bananas</h1>
          <nav>
            <ul>
              <li>
                <NavLink to="/" activeClassName="selected" exact={true}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="selected">About</NavLink>
              </li>
              <li>
                <NavLink to="/projects" activeClassName="selected">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="selected">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </header>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/" exact={true}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const BasicNavbar = () => {
  return (
    <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
        </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Blog = () => (
  <div>
    <h2>Blog</h2>
  </div>
)

ReactDOM.render((
  <div>
    <BasicNavbar />
    <App />
  </div>
), document.getElementById('root'));

registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
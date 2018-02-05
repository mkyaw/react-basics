import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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

const Blogs = ({match}) => (
  <div>
    <h2>Blogs</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Different Types of Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/jsx`}>Write JSX like HTML</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:blogId`} component={Blog} />
    <Route exact path={match.url} render = {() => (
      <h3>Please select a blog.</h3>
    )} />
  </div>
)

const Blog = ({match}) => (
  <div>
    <h3>{match.params.blogId}</h3>
  </div>
)

const BasicNavbar = () => (
  <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blogs" component={Blogs} />
      </div>
  </Router>
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
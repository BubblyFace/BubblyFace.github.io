import React from 'react';
import ReactDOM from 'react-dom';
import { MainView  } from './pages/main/main.view';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Users() {
  return <h2>Users</h2>;
}

ReactDOM.render(
  <Router>
    <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={MainView} />
        <Route path="/users" component={Users} />
    </div>
  </Router>,
  document.getElementById('root')
);
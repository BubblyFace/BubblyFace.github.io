import React from 'react';
import ReactDOM from 'react-dom';
import {MainView} from './pages/main/main.view';
import {BrowserRouter as Router, Route} from 'react-router-dom';

/**
 * @return {JSX} usersContent
 */
function Users() {
  return <h2>Users</h2>;
}

ReactDOM.render(
    <Router>
      <div>
        <Route path="/" exact component={MainView} />
        <Route path="/users" component={Users} />
      </div>
    </Router>,
    document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { MainView } from './pages/main/main.view';
import { ArticleView } from './pages/article/article.view';
import {BrowserRouter as Router, Route} from 'react-router-dom';

/**
 * @return {JSX} usersContent
 */


ReactDOM.render(
  <Router>
    <div>
      <Route path="/" exact component={MainView} />
      <Route path="/article" component={ArticleView} />
    </div>
  </Router>,
  document.getElementById('root')
);

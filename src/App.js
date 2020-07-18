import React from 'react';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import NavigationBar from './components/navbar/navbar';
import MainPage from './Pages/MainPage/MainPage';
import BlogPage from './Pages/BlogPage/BlogPage';
import CreateBlog from './Pages/CreateBlogPage/CreateBlog';
import createHistory from 'history/createBrowserHistory';
import BlogDetail from './Pages/BlogPage/BlogDetail';

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/blog' exact component={BlogPage} />
          <Route path='/blogdetail' component={BlogDetail} />
          <Route path='/create' component={CreateBlog} />
        </Switch>
      </div>
    </Router>

  );
}
export const history = createHistory({ forceRefresh: true })
export default App;

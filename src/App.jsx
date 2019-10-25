import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';

import './App.css';

// Redux store
import Store from './Store';

// App routes
import Routes from './Routes';

// App header
import Header from './template/header/Header'

function App() {
  return (
    // Redux
    <Provider store={Store}>

      {/* React router dom */}
      <Router>

        <section className="todo-list-app">
          {/* App header */}
          <Header />

          {/* App routes */}
          <Routes />
        </section>

      </Router>

    </Provider>
  );
}

export default App;

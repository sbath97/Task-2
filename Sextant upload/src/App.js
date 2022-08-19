import React from 'react';
import './App.css';

import Banner from './Banner';
import Layout from './Layout';

function App() {
    return (
      <Layout class='layout-main'>
       <div className='App'>
          
          <Banner/>
       <h2>(Parent / Child Components)</h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
              Learn React

        </a>
            </div>
            </Layout>
  );
}

export default App;
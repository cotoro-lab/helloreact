import React from 'react';
import { Link } from 'react-router-dom';


const App = () => {
  return(
    <>
      <h1>Hello React Home</h1>
      <nav>
        <ul>
          <li><Link to="prop-page">ボタンを使ってpropを簡単に理解する</Link></li>
          <li><Link to="counter-page">Counterを作成してstateを簡単に理解する</Link></li>
          <li><Link to="jsonph-page">axiosを用いたHTTP通信</Link></li>
        </ul>
      </nav>
    
    </>
  );
};

export default App;
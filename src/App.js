import React, { useState } from 'react';
import AppComponent from './components/App';
import './assets/styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NewsProvider } from './context/newsContext';

function App() {
  const [news, setNews] = useState([]);
  return (
    <div className="App">
      <NewsProvider value={[news, setNews]}>
        <AppComponent />
      </NewsProvider>
    </div>
  );
}

export default App;

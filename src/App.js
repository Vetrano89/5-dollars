import React, { useEffect } from 'react';
import './App.scss';
import AppController from './components/app-controller';
import ReactGA from 'react-ga';

const TRACKING_ID = "UA-189068888-1"; // Replace with your Google Analytics tracking ID


class App extends React.Component {

  componentDidMount() {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <AppController />
          </div>
        </header>
      </div>
    );
  }
}

export default App;

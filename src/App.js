import React from 'react';
import './App.scss';
import AppController from './components/app-controller';
import ReactGA from 'react-ga';

class App extends React.Component {

  componentDidMount() {
    ReactGA.initialize(process.env.GA_TRACKING_ID);
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

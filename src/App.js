import LandingPage from './pages/LandingPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LaunchingPage from './pages/LaunchingPage';
import Countdown from 'react-countdown';
import firebase from "./database/firebase"
import { useState } from 'react';
import Privacy from './pages/privacy';
import TermsAndConditions from './pages/termsAndCondition';
import ScrollToTop from './components/ScrollToTop';



const App = () => {
  const [launchDate,] = useState(new Date(2021, 1, 1))
  const time = firebase.getServerTime()

  // Render LandingPage
  const Completionist = () => <LandingPage />

  const renderer = ({ days, hours, minutes, seconds }) => {

    // const today = new Date(settings.s)
    if (time * 1000 > launchDate.getTime()) {
      // Render the LandingPage
      return <Completionist />;
    } else {
      // Render a countdown
      return <LaunchingPage
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    }
  };
  return (
    <Router>
        <ScrollToTop>
        <Switch>
        <Route path="/terms-and-condition">
            <TermsAndConditions />
          </Route>
          <Route path="/privacy-policy">
            <Privacy />
          </Route>
          <Route path="/">
              <Countdown
              date={Date.now()+(launchDate.getTime()-time*1000)}
              renderer={renderer}
            />
          </Route>
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;

import LandingPage from './pages/LandingPage';
import {
	BrowserRouter as Router,
} from "react-router-dom";
import LaunchingPage from './pages/LaunchingPage';
import Countdown from 'react-countdown';



const App = () => {

  // Render LandingPage
const Completionist = () => <LandingPage />

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
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
       <Countdown
          date={Date.now() + 441504000}
          renderer={renderer}
        />
    </Router>
  );
}

export default App;

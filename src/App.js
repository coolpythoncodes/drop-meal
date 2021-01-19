// import LandingPage from './pages/LandingPage';
import {
	BrowserRouter as Router,
} from "react-router-dom";
import LaunchingPage from './pages/LaunchingPage';

const App = () => {
  return (
    <Router>
      <LaunchingPage/>
      {/* <LandingPage /> */}
    </Router>
  );
}

export default App;

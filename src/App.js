import LandingPage from './pages/LandingPage';
import {
	BrowserRouter as Router,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <LandingPage />
    </Router>
  );
}

export default App;

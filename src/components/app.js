import React from 'react';
import '../style.scss';
import 'tailwindcss/tailwind.css';
import 'aos/dist/aos.css';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import EcologicalFlow from './flows/ecologicalFlow';
import HumanFlow from './flows/humanFlow';
import CombinedFlow from './flows/combinedFlow';
import Explore from './explore';
import Home from './home';
import Intro from './flows/introFlow';

const FallBack = (props) => {
  return (
    <div>URL not found.</div>
  );
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/eco" component={EcologicalFlow} />
          <Route path="/human" component={HumanFlow} />
          <Route path="/future" component={CombinedFlow} />
          <Route path="/explore" component={Explore} />
          <Route path="/intro" component={Intro} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

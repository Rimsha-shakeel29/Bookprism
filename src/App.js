import Playvideo from "./components/Playvideo";
import Uploadbook from "./components/Uploadbook";
import Books from "./components/Books";
import LoginForm from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import AccountInfo from "./components/AccountInfo/AccountInfo";
import ChangePassword from "./components/AccountInfo/ChangePassword";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/UploadBook" component={Uploadbook} />
          <Route path="/playvideo" component={Playvideo} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={RegistrationForm} />
          <Route exact path="/accountinfo" component={AccountInfo} />
          <Route exact path="/changepassword" component={ChangePassword} />
          <Route exact path="/" component={Books} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

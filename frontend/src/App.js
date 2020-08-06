import React from "react";
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import "./App.css";
import ChatRoomPage from "./pages/ChatRoomPage/ChatRoomPage";
import HomePage from "./pages/HomePage/HomePage";
import TopBar from "./pages/common/TopBar";
const history = createHistory();
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <TopBar />
        <Route path="/" exact component={HomePage} />
        <Route path="/chatroom" exact component={ChatRoomPage} />
      </Router>
    </div>
  );
}
export default App;
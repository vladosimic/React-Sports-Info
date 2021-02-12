import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import LeagueDetails from "./components/Leagues/LeagueDetails";
import LeaguesForm from "./components/Leagues/LeaguesForm";

import Nav from "./components/Nav/Nav";
import Player from "./components/Player/Player";
import PlayerDetails from "./components/Player/PlayerDetails";
import SportsDescription from "./components/Home/SportsDescription";
import TeamDetails from "./components/Teams/TeamDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route
            path="/description/:id"
            children={<SportsDescription />}
          ></Route>

          <Route path="/leagues/">
            <LeaguesForm />
          </Route>
          <Route
            path="/league-details/:idLeague"
            children={<LeagueDetails />}
          ></Route>
          <Route
            path="/team-details/:idTeam"
            children={<TeamDetails />}
          ></Route>
          <Route path="/player/">
            <Player />
          </Route>
          <Route
            path="/player-details/:idPlayer"
            children={<PlayerDetails />}
          ></Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

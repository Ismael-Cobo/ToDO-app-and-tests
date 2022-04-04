import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { AboutScreen } from "./AboutScreen";
import { HomeScreen } from "./HomeScreen";
import { LoginScreen } from "./LoginScreen";
import { Navbar } from "./Navbar";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <HomeScreen />
                    </Route>

                    <Route path="/about">
                        <AboutScreen />
                    </Route>

                    <Route path="/login">
                        <LoginScreen />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}

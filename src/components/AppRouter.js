import React from 'react';
import PageNotFound from './PageNotFound'
import App from './App'
import MovieDetail from './MovieDetail'
import 'antd/dist/antd.css';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const APIKEY = "apikey=277a08df"
function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={() => <App APIKEY={APIKEY} />} />
                <Route path="/home" component={() => <App  APIKEY={APIKEY} />} />
                <Route path="/movie/:movieId" component={() => <MovieDetail  APIKEY={APIKEY} />} />
                {/* <Route path="/restaurants/form" component={() => <RestaurantForm />} />
                <Route path="/restaurants/:restaurantId" component={() => <RestaurantDetail />} /> */}
                <Route component={() => <PageNotFound />} />
            </Switch>
        </Router>

    )
}
export default AppRouter;
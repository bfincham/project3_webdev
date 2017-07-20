import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Request from 'superagent';
import './App.css';
import Home from './Home';
import About from './About';
import Events from './Events';
import {TemperatureConverter} from 'cis137-components';






class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            temp: ''
        };
    }

    componentDidMount() {
        Request
            .get(`http://api.openweathermap.org/data/2.5/weather?zip=21157,us&APPID=${process.env.REACT_APP_WEATHER_ACCESS_KEY}`)
            .end((err, res) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log(res);
                this.setState({
                    temp: res.body.main.temp,

                });
            })
    }



    render() {
        return (
            <BrowserRouter>
                <div className="navigation">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/events">Events</Link></li>
                    </ul>
                    <div id="header">

                        <h1>Baltimore Area Triathlon Club Inc.</h1>
                        <h2>Swim | Bike | Run | Fun </h2>
                        <h3>Current Temperature</h3>
                        <h4>
                            <TemperatureConverter kelvin={this.state.temp} toUnit="F"/>
                        </h4>


                    </div>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" exact component={About}/>
                    <Route path="/events" exact component={Events}/>

                </div>

            </BrowserRouter>

        );
    }
}


export default App;


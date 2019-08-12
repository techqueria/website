import React from "react";
import ReactDOM from "react-dom";
import Eventbrite from './react-components/eventbrite';

ReactDOM.render(<Eventbrite></Eventbrite>, document.getElementById("upcoming-events"));
ReactDOM.render(<Eventbrite status="completed"></Eventbrite>, document.getElementById("past-events"));

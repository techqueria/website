/* eslint-disable no-unused-vars */

import React from "react";
import ReactDOM from "react-dom";
import Eventgrouping from "./react-components/event-grouping";
import formatDate from "./react-components/common";
class Eventbrite extends React.Component {
  constructor(props) {
    super(props);

    this.state = {url : "/.netlify/functions/eventbrite"};
  }
  render() {
    return  (
      <Eventgrouping url={this.state.url} transform={this.transform}></Eventgrouping>
    );
  }
  transform(data) {
    const events = data.events.map((event) => {
      let image;
      if (event.logo && event.logo.original) {
        image = event.logo.original.url;
      }
      else {
        image = "/assets/img/supporters/eventbrite.png";
      }
      return {
        name: event.name.text,
        photo_url: image,
        event_url: event.url,
        description: event.description.text,
        created: formatDate(new Date(event.start.utc))
      };
    });
    return events;
  }
}

ReactDOM.render(<Eventbrite></Eventbrite>, document.getElementById("upcoming-events"));

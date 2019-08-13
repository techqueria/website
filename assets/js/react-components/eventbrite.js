import React from "react";

import Events from "./events";

class Eventbrite extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liveEvents: [],
      completedEvents: []
    };
  }
  render() {
    const {liveEvents, completedEvents} = this.state;
    return (
      <div>
        <Events status="live" events={liveEvents}></Events>
        <Events status="completed" events={completedEvents}></Events>
      </div>
    );
  }
  getEvents() {
    const url =
      "http://localhost:9000/eventbrite";
    const request = new Request(url);
    return fetch(request)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Something went wrong on api server!");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  transform(data) {
    const events = data.events.map((event) => {
      let image;
      if (event.logo && event.logo.original) {
        image = event.logo.original.url;
      }
      else {
        image = "/assets/img/banners/eventbrite.png";
      }
      return {
        name: event.name.text,
        photo_url: image,
        event_url: event.url,
        description: event.description.text,
        created: event.start.utc
      };
    });
    return events;
  }
  async componentDidMount() {
    try {
      const data = await this.getEvents();
      const events = {
        live: this.transform(data.live),
        completed: this.transform(data.completed)
      };
      this.setState({
        liveEvents: events.live,
        completedEvents: events.completed
      });
    }
    catch (e) {
      console.warn("there is an error");
    }
  }
}

export default Eventbrite;

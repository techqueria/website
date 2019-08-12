import React from "react";

import Eventcard from "./event-card";

class Meetup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    };
  }
  render() {
    const {events} = this.state;
    return (
      events.map((event) => (
        <Eventcard
          photo_url={event.photo_url}
          name={event.name}
          event_url={event.event}
          description={event.description}
          created
        ></Eventcard>
      ))
    );
  }
  getEvents() {
    const url =
      "https://api.meetup.com/techqueria/events?&sign=true&photo-host=secure&status=past&text_format=plain&page=20&desc=true";
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
  async componentDidMount() {
    const data = await this.getEvents();
    const events = data.events.map((event) => {
      if (event.photo_url) {
        event.photo_url = photo_url.replace("global", "highres");
      } else {
        event.photo_url = "https://cdn.logojoy.com/wp-content/uploads/2017/07/Meetup_logo.png";
      }
      return event;
    });
    this.setState({
      events: events
    });
  }
}

export default Meetup;

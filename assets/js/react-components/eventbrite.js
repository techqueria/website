import React from "react";

import Eventcard from "./event-card";

class Eventbrite extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    };
  }
  render() {
    const {events} = this.state;
    return (
      events.map((event, index) => (
        <Eventcard
          photo_url={event.photo_url}
          name={event.name}
          event_url={event.event}
          description={event.description}
          created
          key={index}
        ></Eventcard>
      ))
    );
  }
  getEvents() {
    const url =
      "https://www.eventbriteapi.com/v3/organizers/13735914017/events/?order_by=start_desc&status=completed&token=7IZ4CUPAJFMM2ZZSC75E";
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
      // if (event.photo_url) {
      //   event.photo_url = photo_url.replace("global", "highres");
      // } else {
      //   event.photo_url = "https://cdn.logojoy.com/wp-content/uploads/2017/07/Meetup_logo.png";
      // }
      let image;
      if (event.logo && event.logo.original) {
        image = event.logo.original.url;
      }
      else {
        image = "https://cdn.logojoy.com/wp-content/uploads/2017/07/Meetup_logo.png";
      }
      return {
        name: event.name.text,
        photo_url: image,
        event_url: event.url,
        description: event.description.text,
        created: event.start.utc
      };
    });
    this.setState({
      events: events
    });
  }
}

export default Eventbrite;

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
      "http://localhost:9000/meetup";
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

  dayOfWeekAsInteger(day) {
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][day];
  }

  formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return `${this.dayOfWeekAsInteger(date.getDay())} - ${monthNames[monthIndex]} ${day}, ${year}`;
  }
  transform(data) {
    const events = data.map((event) => {
      let image;
      if (event.featured_photo && event.featured_photo.highres_link) {
        image = event.featured_photo.highres_link;
      }
      else {
        image = "https://cdn.logojoy.com/wp-content/uploads/2017/07/Meetup_logo.png";
      }
      return {
        name: event.name,
        photo_url: image,
        event_url: event.link,
        description: event.plain_text_description,
        created: this.formatDate(new Date(event.time))
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
      console.warn("there is an error processing request", e);
    }
  }
}

export default Eventbrite;

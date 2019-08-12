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
    let header;
    const status = this.props.status || "live";
    if (status === "live") {
      const eventText = events.length > 1 ? "events" : "event";
      header = (<h2>⏳ { events.length } upcoming {eventText}</h2>);
    } else {
      header = (<h2>⌛️{events.length} Past Events</h2>);
    }

    const body = (
      <section>
        <div className="content mt-2">
          {header}
        </div>
        <div className="columns is-multiline">
          {
            events.map((event, index) => (
              <Eventcard
                photo_url={event.photo_url}
                name={event.name}
                event_url={event.event_url}
                description={event.description}
                created={event.created}
                key={index}
              ></Eventcard>
            ))
          }
        </div>
      </section>
    );
    return (
      <div>
        {
          events.length >= 1 && body
        }
      </div>
    );
  }
  getEvents() {
    // status: live/completed
    const status = this.props.status || "live";
    const url =
      `https://www.eventbriteapi.com/v3/organizers/13735914017/events/?order_by=start_desc&status=${status}&token=7IZ4CUPAJFMM2ZZSC75E`;
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
    this.setState({
      events: events
    });
  }
}
//TODO: add a prop to pass live/completed for past or future events

export default Eventbrite;

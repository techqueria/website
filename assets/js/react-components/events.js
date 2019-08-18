/* eslint-disable no-unused-vars */

import React from "react";

import Eventcard from "./event-card";

class Events extends React.Component {
  constructor(props) {
    super(props);
  }
  getHeader(status, events) {
    let header;
    if (status === "live") {
      const eventText = events.length > 1 ? "events" : "event";
      header = (<h2>⏳ { events.length } upcoming {eventText}</h2>);
    } else {
      header = (<h2>⌛️{events.length} Past Events</h2>);
    }
    return header;
  }
  getBody(header, events) {
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
    return body;
  }
  render() {
    const events = this.props.events || [];
    const status = this.props.status || "live";
    const header = this.getHeader(status, events);
    const body = this.getBody(header, events);
    return (
      <div>
        { events.length >= 1 && body }
      </div>
    );
  }
}

export default Events;

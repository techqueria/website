import React from "react";

import Events from "./events";

class Eventgrouping extends React.Component {
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
    const url = this.props.url || null;
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
    try {
      const data = await this.getEvents();
      const events = {
        live: this.props.transform(data && data.live || []),
        completed: this.props.transform(data && data.completed || [])
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

export default Eventgrouping;

import React from "react";
import ReactDOM from "react-dom";
import Eventgrouping from "./react-components/event-grouping";
import formatDate from "./react-components/common";
class Meetup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {url : "/.netlify/functions/meetup"};
  }
  render() {
    return  (
      <Eventgrouping url={this.state.url} transform={this.transform}></Eventgrouping>
    );
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
        created: formatDate(new Date(event.time))
      };
    });
    return events;
  }
}

ReactDOM.render(<Meetup></Meetup>, document.getElementById("upcoming-events"));

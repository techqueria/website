require("dotenv").config();

import axios from "axios";

function getEventbriteEvents(status, token) {
  return axios.get(
    `https://www.eventbriteapi.com/v3/organizers/13735914017/events/?order_by=start_desc&status=${status}&token=${token}`,
    {
      headers: {Accept: "application/json"}
    }
  );
}

export async function handler(event, context) {
  try {
    const token = process.env.EVENTBRITE || "";
    const responses = await Promise.all(
      ["live", "completed"].map((status) => getEventbriteEvents(status, token))
    );
    const data = {
      live: responses[0].data,
      completed: responses[1].data
    };
    return {
      statusCode: 200,
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({...data})
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({msg: err.message})
    };
  }
}

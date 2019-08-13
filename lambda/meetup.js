require("dotenv").config();

import axios from "axios";

function getMeetupEvents(status, token) {
  return axios.get(
    `https://api.meetup.com/techqueria/events?&sign=true&photo-host=secure&status=${status}&text_format=plain&page=20&desc=true&fields=featured_photo,plain_text_description`,
    {
      headers: {Accept: "application/json"}
    }
  );
}

export async function handler(event, context) {
  try {
    const token = process.env.EVENTBRITE || "";
    const responses = await Promise.all(
      ["upcoming", "past"].map((status) => getMeetupEvents(status, token))
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

require("dotenv").config();

import axios from "axios";
import handleResponse from "./common";

function getMeetupEvents(status, token) {
  return axios.get(
    `https://api.meetup.com/techqueria/events?&sign=true&photo-host=secure&status=${status}&text_format=plain&page=20&desc=true&
    fields=featured_photo,plain_text_description`,
    {
      headers: {Accept: "application/json"}
    }
  );
}

export async function handler(event, context) {
  const requests = ["upcoming", "past"].map((status) => getMeetupEvents(status, ""));
  return handleResponse(requests);
}

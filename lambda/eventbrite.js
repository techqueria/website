require("dotenv").config();

import axios from "axios";
import handleResponse from "./common";

function getEventbriteEvents(status, token) {
  return axios.get(
    `https://www.eventbriteapi.com/v3/organizers/13735914017/events/?order_by=start_desc&status=${status}&token=${token}`,
    {
      headers: {Accept: "application/json"}
    }
  );
}

export async function handler(event, context) {
  const token = process.env.EVENTBRITE || "";
  const requests = ["live", "completed"].map((status) => getEventbriteEvents(status, token));
  return handleResponse(requests);
}

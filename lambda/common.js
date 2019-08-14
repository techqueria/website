export default async function handleResponse(requests) {
  try {
    const responses = await Promise.all(requests);
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
    return {
      statusCode: 500,
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({msg: err.message})
    };
  }
}

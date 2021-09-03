import axios from 'axios';

export const getAllUser = async () : Promise<string> => {
  try {
    const json = await axios({
      url: 'https://jsonplaceholder.typicode.com/users',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return json.data;
  } catch (e) {
    return e;
  }
};
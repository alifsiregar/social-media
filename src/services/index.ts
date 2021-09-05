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
    return 'Error';
  }
};

export const getUserDetail = async (id: string) : Promise<string> => {
  try {
    const json = await axios({
      url: `https://jsonplaceholder.typicode.com/users/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return json.data;
  } catch (e) {
    return 'Error';
  }
};

export const getUserPosts = async (id: string) : Promise<string> => {
  try {
    const json = await axios({
      url: `https://jsonplaceholder.typicode.com/users/${id}/posts`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return json.data;
  } catch (e) {
    return 'Error';
  }
};

export const getUserAlbums = async (id: string) : Promise<string> => {
  try {
    const json = await axios({
      url: `https://jsonplaceholder.typicode.com/users/${id}/albums`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return json.data;
  } catch (e) {
    return 'Error';
  }
};

export const getPostDetail = async (postId: string) : Promise<string> => {
  try {
    const json = await axios({
      url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return json.data;
  } catch (e) {
    return 'Error';
  }
};

export const getPostComments = async (postId: string) : Promise<string> => {
  try {
    const json = await axios({
      url: `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return json.data;
  } catch (e) {
    return 'Error';
  }
};

export const getAlbumDetail = async (albumId: string) : Promise<string> => {
  try {
    const json = await axios({
      url: `https://jsonplaceholder.typicode.com/albums/${albumId}/`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return json.data;
  } catch (e) {
    return 'Error';
  }
};

export const getAlbumPhotos = async (albumId: string) : Promise<string> => {
  try {
    const json = await axios({
      url: `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return json.data;
  } catch (e) {
    return 'Error';
  }
};

export const getPhotoDetail = async (photoId: string) : Promise<string> => {
  try {
    const json = await axios({
      url: `https://jsonplaceholder.typicode.com/photos/${photoId}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return json.data;
  } catch (e) {
    return 'Error';
  }
};
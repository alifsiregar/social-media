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
  } catch (e: any) {
    return e;
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
  } catch (e: any) {
    return e;
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
  } catch (e: any) {
    return e;
  }
};

export const addUserPosts = async (id: string, title: string, body: string) : Promise<string> => {
  try {
    const json = await axios({
      url: `https://jsonplaceholder.typicode.com/users/${id}/posts`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        title: title,
        body: body,
      }
    });
    return json.data;
  } catch (e: any) {
    return e;
  }
};

export const deleteUserPosts = async (id: string) : Promise<string> => {
  try {
    const json = await axios({
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return json.data;
  } catch (e: any) {
    return e;
  }
};

export const updateUserPosts = async (id: string, title: string, body: string, userId: string) : Promise<string> => {
  try {
    const json = await axios({
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        id: id,
        title: title,
        body: body,
        userId: userId,
      }
    });
    return json.data;
  } catch (e: any) {
    return e;
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
  } catch (e: any) {
    return e;
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
  } catch (e: any) {
    return e;
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
  } catch (e: any) {
    return e;
  }
};

export const getCommentDetail = async (commentId: string) : Promise<string> => {
  try {
    const json = await axios({
      url: `https://jsonplaceholder.typicode.com/comments/${commentId}/`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return json.data;
  } catch (e: any) {
    return e;
  }
};

export const addPostComments = async (id: string, email: string, body: string) : Promise<string> => {
  try {
    const json = await axios({
      url: `https://jsonplaceholder.typicode.com/posts/${id}/comments/`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        email: email,
        body: body,
      }
    });
    return json.data;
  } catch (e: any) {
    return e;
  }
};

export const deletePostComments = async (id: string) : Promise<string> => {
  try {
    const json = await axios({
      url: `https://jsonplaceholder.typicode.com/comments/${id}/`,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return json.data;
  } catch (e: any) {
    return e;
  }
};


export const updatePostComments = async (id: string, email: string, body: string, postId: string) : Promise<string> => {
  try {
    const json = await axios({
      url: `https://jsonplaceholder.typicode.com/comments/${id}`,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        id: id,
        email: email,
        body: body,
        postId: postId,
      }
    });
    return json.data;
  } catch (e: any) {
    return e;
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
  } catch (e: any) {
    return e;
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
  } catch (e: any) {
    return e;
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
  } catch (e: any) {
    return e;
  }
};
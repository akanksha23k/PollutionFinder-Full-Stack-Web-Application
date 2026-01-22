import axios from "axios";

const API_URL = "http://localhost:8080/api/bookmarks";

export const saveBookmark = (bookmark) => {
  return axios.post(API_URL, bookmark);
};

export const getBookmarks = (username) => {
  return axios.get(`${API_URL}?username=${username}`);
};

export const deleteBookmark = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

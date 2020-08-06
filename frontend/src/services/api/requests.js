const APIURL = "http://localhost:3000";
const axios = require("axios");
export const getChatRooms = () => axios.get(`${APIURL}/chatrooms`);
export const getChatRoomMessages = chatRoomName =>
  axios.get(`${APIURL}/chatrooms/messages/${chatRoomName}`);
export const joinRoom = room =>
  axios.post(`${APIURL}/chatrooms/create`, { room });
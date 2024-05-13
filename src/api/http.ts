import axios from "axios";
import { Room } from "./types";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export async function getRooms() {
  const url = "/rooms";
  const response = await api.get<Room[]>(url);

  return response.data;
}

export async function postRoom(roomName: string) {
  const url = "/rooms";
  const response = await api.post(url, { roomName });

  return response;
}

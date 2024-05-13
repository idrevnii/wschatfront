import { create } from "zustand";
import { Store } from "./types";
import {
  getRooms,
  loadMessages,
  postRoom,
  sendMessageEvent,
  startWsListening,
} from "@/api";

export const useStore = create<Store>()((set, get) => ({
  rooms: [],
  messages: [],

  createRoom: async (roomName) => {
    await postRoom(roomName);
  },

  fetchRooms: async () => {
    const rooms = await getRooms();

    set({ rooms });
  },

  changeActiveRoom: (room) => {
    set({ activeRoom: room });
  },

  fetchMessages: async (roomId) => {
    set({ messages: [] });

    await startWsListening().then(() =>
      loadMessages(roomId, (messages) => {
        const existingMessages = get().messages;
        const existingMessagesIds = existingMessages.map((m) => m.id);
        const uniqueNewMessages = messages.filter(
          (m) => !existingMessagesIds.includes(m.id)
        );

        set({
          messages: [...existingMessages, ...uniqueNewMessages],
        });
      })
    );
  },

  sendMessage: (message) => {
    sendMessageEvent(message);
  },
}));

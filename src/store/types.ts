import { Message, Room, SendMessage } from "@/api";

export type Store = {
  activeRoom?: Room;
  rooms: Room[];
  messages: Message[];
  createRoom: (roomName: string) => Promise<void>;
  fetchRooms: () => Promise<void>;
  changeActiveRoom: (roomId: Room) => void;
  fetchMessages: (roomId: string) => Promise<void>;
  sendMessage: (message: SendMessage) => void;
};

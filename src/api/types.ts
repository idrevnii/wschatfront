export type Room = {
  id: string;
  roomName: string;
};

export type Message = {
  id: string;
  text: string;
  roomId: string;
  userId: string;
};

export type SendMessage = Omit<Message, "id">;

type SendedMessage = {
  type: "sendedMessage";
  data: SendMessage;
};

type WaitingForMessages = {
  type: "waitingForMessages";
  data: string; // RoomId
};

export type WsEvent = SendedMessage | WaitingForMessages;

// export type WsEventHandlers = {
//     saveMessages: (messages: Message[]) => void

// }

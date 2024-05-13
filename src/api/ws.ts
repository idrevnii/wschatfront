import WebSocket from "isomorphic-ws";
import { Message, SendMessage, WsEvent } from ".";

let ws: WebSocket;

export async function startWsListening() {
  return new Promise<void>((resolve, reject) => {
    if (ws && ws.readyState === ws.OPEN) {
      return resolve();
    }

    ws = new WebSocket("ws://localhost:8080");

    ws.onclose = function close() {
      console.log("disconnected");
      return reject();
    };

    ws.onopen = function open() {
      console.log("connected");
    };

    setTimeout(() => {
      if (ws.readyState === ws.OPEN) {
        return resolve();
      }
    }, 100);
  });
}

export function loadMessages(
  roomId: string,
  saveToStore: (messages: Message[]) => void
) {
  ws.onmessage = function listen(event) {
    saveToStore(JSON.parse(event.data.toString()) as Message[]);
  };

  const waitingForMessagesEvent: WsEvent = {
    type: "waitingForMessages",
    data: roomId,
  };

  ws.send(JSON.stringify(waitingForMessagesEvent));
}

export function sendMessageEvent(message: SendMessage) {
  const sendedMessageEvent: WsEvent = {
    type: "sendedMessage",
    data: message,
  };

  ws.send(JSON.stringify(sendedMessageEvent));
}

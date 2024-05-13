import { useStore } from "@/store";
import { SendMessage } from "./SendMessage";
import { useEffect } from "react";
import { Message } from "./Message";

export function Chat() {
  const { activeRoom, messages, fetchMessages } = useStore();

  useEffect(() => {
    if (activeRoom?.id) {
      fetchMessages(activeRoom?.id);
    }
  }, [activeRoom]);

  return (
    <div className="max-h-screen w-full p-2 flex flex-col content-between justify-between">
      <div className="overflow-y-scroll">
        {messages.map((message) => (
          <Message key={message.id} text={message.text} />
        ))}
      </div>
      <SendMessage />
    </div>
  );
}

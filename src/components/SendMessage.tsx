import { useStore } from "@/store";
import { useState } from "react";
import { Button, Textarea } from "./ui";

export function SendMessage() {
  const { activeRoom, sendMessage } = useStore();
  const [text, setText] = useState("");

  const onSendHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (activeRoom?.id) {
      sendMessage({
        text,
        roomId: activeRoom.id,
        userId: "kpm3fm4c4o3dfpxjyve2tnys",
      });

      setText("");
    }
  };

  return (
    <div className="max-h-32">
      <form onSubmit={onSendHandler} className="flex items-center">
        <Textarea
          className="border"
          value={text}
          onChange={(event) => setText(event.target.value)}
        ></Textarea>
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}

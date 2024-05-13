import { useState } from "react";
import { Button, Input } from "./ui";
import { useStore } from "@/store";

export function CreateNewRoom() {
  const { createRoom, fetchRooms } = useStore();

  const [isNewRoomFormOpen, setIsNewRoomFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [newRoomName, setNewRoomName] = useState("");

  const onAddNewRoomHandler = () => setIsNewRoomFormOpen(true);

  const onSubmitNewRoomHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setIsLoading(true);
    await createRoom(newRoomName);
    await fetchRooms().then(() => {
      setIsNewRoomFormOpen(false);
      setIsLoading(false);
      setNewRoomName("");
    });
  };

  return (
    <>
      {isNewRoomFormOpen ? (
        <form
          className="flex flex-col space-y-2"
          onSubmit={onSubmitNewRoomHandler}
        >
          <Input
            placeholder="Room name"
            value={newRoomName}
            onChange={(event) => setNewRoomName(event.target.value)}
          />
          <Button disabled={isLoading}>Create new room</Button>
        </form>
      ) : (
        <Button onClick={onAddNewRoomHandler}>Add new room</Button>
      )}
    </>
  );
}

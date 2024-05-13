import { useStore } from "@/store";
import { useEffect } from "react";
import { Button } from "./ui";
import { Room } from "@/api";
import { CreateNewRoom } from "./CreateNewRoom";

export function Rooms() {
  const { rooms, fetchRooms, changeActiveRoom } = useStore();

  useEffect(() => {
    fetchRooms();
  }, []);

  const onChangeRoomHandler = (room: Room) => () => {
    changeActiveRoom(room);
  };

  return (
    <div className="flex flex-col justify-between border py-2 px-2 max-w-48 w-full">
      <div className="flex flex-col justify-between gap-1">
        {rooms.map((room) => (
          <Button
            className="border"
            key={room.id}
            onClick={onChangeRoomHandler(room)}
          >
            {room.roomName}
          </Button>
        ))}
      </div>
      <CreateNewRoom />
    </div>
  );
}

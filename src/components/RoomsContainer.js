import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import Loading from "./Loading";
import { useRooms } from "../room-hooks";

export default function RoomsContainer() {
  const { loading, sortedRooms, rooms } = useRooms();
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <RoomsFilter rooms={rooms}/>
      <RoomsList rooms={sortedRooms}/>
    </div>
  );
}

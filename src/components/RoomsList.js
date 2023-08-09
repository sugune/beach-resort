import Room from "./Room";

export default function RoomsList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h6>no rooms matched your search</h6>
      </div>
    );
  }

  return <section className="roomslist">
  <div className="roomslist-center">
 {rooms.map(room => (
 <Room key={room.id} room={room} />
 ))}
 
 </div>
  </section>;
}

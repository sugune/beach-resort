import { useRooms } from "../room-hooks";
import Loading from "./Loading";
import Title from "./Title";
import Room from "./Room";

export default function FeaturedRooms() {
  const { loading, featuredRooms } = useRooms();
  const rooms = featuredRooms.map((room) => <Room key={room.id} room={room} />);

  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {loading ? <Loading /> : rooms}
      </div>
    </section>
  );
}

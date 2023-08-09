import Title from "./Title";
import { useRooms } from "../room-hooks";

const getUnique = (items, property) => {
  return [...new Set(items.map((item) => item[property]))];
};
export default function RoomsFilter({ rooms }) {
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    pets,
    breakfast,
  } = useRooms();

  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((item, i) => (
    <option key={i} value={item}>
      {item}
    </option>
  ));
  let people = getUnique(rooms, "capacity");
  people = people.map((item, i) => (
    <option key={i} value={item}>
      {item}
    </option>
  ));

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/*select type*/}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            className="form-control"
            name="type"
            value={type}
            id="type"
            onChange={(e) => handleChange(e)}
          >
            {types}
          </select>
        </div>
        {/*end select type*/}
        {/*guest*/}
        <div className="form-group">
          <label htmlFor="capacity">guest</label>
          <select
            className="form-control"
            name="capacity"
            value={capacity}
            id="capacity"
            onChange={(e) => handleChange(e)}
          >
            {people}
          </select>
        </div>
        {/*end of guest*/}
        {/*room price*/}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            value={price}
            id="price"
            min={minPrice}
            max={maxPrice}
            className="form-control"
            onChange={(e) => handleChange(e)}
          />
        </div>
        {/*end of room price*/}
        {/*room price*/}
        <div className="form-group">
          <label htmlFor="size">
            room size <br />
            {minSize} ~ {maxSize}
          </label>
          <input
            type="number"
            name="minSize"
            value={minSize}
            id="size"
            className="size-input"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="number"
            name="maxSize"
            value={maxSize}
            id="size"
            className="size-input"
            onChange={(e) => handleChange(e)}
          />
        </div>
        {/*end of room price*/}
        {/*checkbox*/}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              id="breakfast"
              name="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              id="pets"
              name="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          
          </div>
        </div>
        {/*end of checkbox*/}
      </form>
    </section>
  );
}

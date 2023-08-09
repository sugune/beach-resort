import React, { useState, useEffect, useContext, createContext } from "react";
import items from "./data";
import client from "./contentful";

const RoomContext = createContext();
const useRooms = () => useContext(RoomContext);

function RoomProvider({ children }) {
  const [data, setData] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    maxPrice: 0,
    minPrice: 0,
    maxSize: 0,
    minSize: 0,
    pets: false,
    breakfast: false,
  });

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "hotelRooms",
        order: "fields.price",
      });
      console.log(response.items);
      const rooms = formatData(response.items);
      const featuredRooms = rooms.filter((room) => room.featured === true);
      console.log("error");
      console.log(rooms);
      const maxPrice = Math.max(...rooms.map((item) => item.price));
      const maxSize = Math.max(...rooms.map((item) => item.size));

      setData((prevData) => ({
        ...prevData,
        rooms,
        sortedRooms: rooms,
        featuredRooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize,
      }));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const formatData = (items) => {
    const tempValue = items.map((item) => {
      const id = item.sys.id;
      const images = item.fields.images.map((image) => image.fields.file.url);
      const room = { ...item.fields, images, id };

      return room;
    });

    return tempValue;
  };

  const getRoom = (slug) => {
    const tempRooms = data.rooms;
    const room = tempRooms.find((room) => room.slug === slug);

    return room;
  };

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = e.target.name;

    const tempData = {
      ...data,
      [name]: value,
    };
    setData(tempData);
    filterRooms(tempData);
  };

  const filterRooms = (data) => {
    let { rooms, type, capacity, minSize, maxSize, pets, breakfast, price } =
      data;

    // parse value
    capacity = parseInt(capacity);
    price = parseInt(price);

    let tempRooms = [...rooms];
    // filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }

    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }
    // filter by price
    tempRooms = tempRooms.filter((room) => room.price <= price);

    // filter by size
    tempRooms = tempRooms.filter((room) => room.size >= minSize);
    tempRooms = tempRooms.filter((room) => room.size <= maxSize);

    // filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === breakfast);
    }

    //filter by pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === pets);
    }

    setData((prevData) => ({
      ...prevData,
      sortedRooms: tempRooms,
    }));
  };

  return (
    <RoomContext.Provider value={{ ...data, handleChange, getRoom }}>
      {children}
    </RoomContext.Provider>
  );
}

export { RoomContext, RoomProvider, useRooms };

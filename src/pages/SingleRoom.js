import React, { useState } from "react";
import defaultBcg from "../images/room-1.jpeg";
import { Link, useParams } from "react-router-dom";
import StyledHero from "../components/StyledHero";
import Banner from "../components/Banner";
import { useRooms } from "../room-hooks";

export default function SingleRoom() {
  const { slug: param } = useParams();
  const { getRoom } = useRooms();
  const [slug, setSlug] = useState(param);
  const room = getRoom(slug);

  if (!room) {
    return (
      <div className="error">
        <h3>No such room was found</h3>
        <Link to="/rooms" className="btn-primary">
          back to rooms
        </Link>
      </div>
    );
  }

  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;
  const [mainImg, ...otherImg] = images;

  return (
    <>
      <StyledHero img={mainImg || defaultBcg}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {otherImg.map((img, i) => (
            <img key={i} src={img} alt={name} />
          ))}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price : ${price}</h6>
            <h6>size : {size} SQFT</h6>
            <h6>
              max capacity :{" "}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "pets are allowed" : "no pets are allowed"}</h6>
            <h6>{breakfast && "free breakfast"}</h6>
          </article>
        </div>
        <div className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, i) => (
              <li key={i}>- {item}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

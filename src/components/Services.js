import React, { } from "react";

import Title from "./Title";
import { FaCocktail, FaShuttleVan, FaHiking, FaBeer } from "react-icons/fa";

export default function Services() {
  const icons = [
    {
      icon: <FaCocktail />,
      title: "Free Cocktail",
      info: "Poppins I am The Sorcerer King of the Demonic Master of the Demonic Master of",
    },
    {
      icon: <FaHiking />,
      title: "Endless Hiking",
      info: "Poppins I am The Sorcerer King of the Demonic Master of the Demonic Master of",
    },
    {
      icon: <FaShuttleVan />,
      title: "Free Shuttle Van",
      info: "Poppins I am The Sorcerer King of the Demonic Master of the Demonic Master of",
    },
    {
      icon: <FaBeer />,
      title: "Strongest Beer",
      info: "Poppins I am The Sorcerer King of the Demonic Master of the Demonic Master of",
    },
  ];

  return (
    <section className="services">
      <Title title="Services" />
      <div className="services-center">
        {icons.map((icon, i) => (
          <article key={i}>
            <span>{icon.icon}</span>
            <h6>{icon.title}</h6>
            <p>{icon.info}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

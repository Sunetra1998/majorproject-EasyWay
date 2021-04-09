  
import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "We're committed to ensuring quality service delivery, everytime"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "We're committed to ensuring quality service delivery, everytime"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "We're committed to ensuring quality service delivery, everytime"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
        "We're committed to ensuring quality service delivery, everytime"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
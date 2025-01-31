import React from "react";
import eventlogo from "../assets/event-logo.png";
import eventimg from "../assets/event-section.png";

export function EventSection() {
  return (
    <section
      className="event"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="900"
    >
      <div className="event__img">
        <img src={eventimg} alt="eventimg" />
      </div>
      <div
        className="event__con"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="900"
      >
        <div
          className="event__con__logo"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <img src={eventlogo} alt="eventlogo" />
        </div>
        <div
          className="event__con__heading"
          data-aos="fade-up"
          data-aos-delay="60"
          data-aos-duration="1100"
        >
          Event Lawn
        </div>
        <div
          className="event__con__info"
          data-aos="fade-up"
          data-aos-delay="60"
          data-aos-duration="1100"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took.
        </div>
      </div>
    </section>
  );
}

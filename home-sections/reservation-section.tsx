import React, { useState } from "react";
import Section from "../components/section";
import Reservation from "../components/reservation";
import MapSection from "./map-section";

const BookTableSection = () => {
  return (
    <Section id={"reservation"}>
      <div className="flex flex-col sm:flex-row w-full items-end gap-5 mb-10">
        <div className="flex flex-1 max-w-4xl w-full">
          <Reservation />
        </div>
        <div className="flex-1 w-full">
          <MapSection
            isMarkerShown={false}
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `600px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
    </Section>
  );
};

export default BookTableSection;

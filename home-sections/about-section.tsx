import React from "react";
import { Parallax } from "react-parallax";

import SectionTitle from "../components/section-title";
import Section from "../components/section";
import Paragraph from "../components/paragraph";

export default function About() {
  return (
    <>
      <Section>
        <SectionTitle>Appetizer Restaurant</SectionTitle>
        <div className="container">
          <Paragraph className="text-center">
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times and everything that was left from its origin would be the word
            "and" and the Little Blind Text should turn around and return to its
            own, safe country. A small river named Duden flows by their place
            and supplies it with the necessary regelialia. It is a paradisematic
            country, in which roasted parts of sentences fly into your mouth.
          </Paragraph>
        </div>
      </Section>
      <div className="w-full">
        <Parallax bgImage="/images/bg5.jpeg" strength={100}>
          <div className="flex flex-col items-center md:flex-wrap md:flex-row w-full justify-center">
            <div className="flex gap-3 items-center p-5 mb-5">
              <h4 className="text-4xl">18</h4>
              <p>Years of experience</p>
            </div>
            <div className="flex flex-wrap gap-3 items-center p-5 mb-5">
              <h4 className="text-4xl">15000</h4>
              <p>Happy customers</p>
            </div>
            <div className="flex flex-wrap gap-3 items-center p-5 mb-5">
              <h4 className="text-4xl">20</h4>
              <p>Monus</p>
            </div>
            <div className="flex flex-wrap gap-3 items-center p-5 mb-5">
              <h4 className="text-4xl">20</h4>
              <p>Staffs</p>
            </div>
          </div>
        </Parallax>
      </div>
    </>
  );
}

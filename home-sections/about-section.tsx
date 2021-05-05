import React from "react";
import { Parallax } from "react-parallax";
import Section from "../components/section";

const About: React.FC = () => {
  return (
    <>
      <Section className="p-x-0 mb-20">
        <Section.Title title="Appetizer Restaurant" subtitle="About" />
        <div className="max-w-2xl -mt-12">
          <Section.Paragraph className="text-center">
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times and everything that was left from its origin would be the word
            "and" and the Little Blind Text should turn around and return to its
            own, safe country. A small river named Duden flows by their place
            and supplies it with the necessary regelialia. It is a paradisematic
            country, in which roasted parts of sentences fly into your mouth.
          </Section.Paragraph>
        </div>
      </Section>
      <div>
        <div className="w-full">
          <Parallax
            bgImage="/images/breakfast-coffee.jpeg"
            strength={300}
            bgStyle={{ height: "30vh" }}
          >
            <div className="flex flex-col h-96 items-center md:flex-wrap md:flex-row w-full justify-around">
              <FeatureItem title={"18"} subtitle="Years of experience" />
              <FeatureItem title={"15000"} subtitle="Happy customers" />
              <FeatureItem title={"20"} subtitle="Monus" />
              <FeatureItem title={"20"} subtitle="Staffs" />
            </div>
          </Parallax>
        </div>
      </div>
    </>
  );
};

const FeatureItem: React.FC<{ title: string; subtitle: string }> = (props) => {
  return (
    <div className="flex flex-col flex-wrap gap-3 items-center p-5 mb-5">
      <h4 className="text-5xl font-bold text-black">{props.title}</h4>
      <p className="text-black text-2xl">{props.subtitle}</p>
    </div>
  );
};

export default About;

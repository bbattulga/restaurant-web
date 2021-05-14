import React from "react";
import * as Icons from "@heroicons/react/solid";
import InstagramGallery from "../components/instagram-gallery";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 p-3">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <div>
          <Title>Appetizer</Title>
          <p className="">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div>
          <Title>Open hours</Title>
          <div className="flex flex-col w-full ">
            <WorkTime day="Monday" time="9:00 - 24:00" />
            <WorkTime day="Tuesday" time="9:00 - 24:00" />
            <WorkTime day="Wednesday" time="9:00 - 24:00" />
            <WorkTime day="Thursday" time="9:00 - 24:00" />
            <WorkTime day="Friday" time="9:00 - 24:00" />
            <WorkTime day="Saturday" time="9:00 - 24:00" />
            <WorkTime day="Sunday" time="9:00 - 24:00" />
          </div>
        </div>
        <div>
          <Title>Newsletter</Title>
          <p className="mb-5">
            Far far away, behind the word mountains, far from the countries.
          </p>
          <div className="flex flex-col w-full">
            <input
              placeholder="Enter email address"
              className="w-full bg-gray-500 p-3 mb-3 text-center text-white rounded-sm"
            />
            <button className="w-full p-3 text-white bg-yellow-500 rounded-sm">
              Subscribe
            </button>
          </div>
        </div>
        <div>
          <Title>Instagram</Title>
          <InstagramGallery />
        </div>
      </div>

      <p className="text-center mt-8 mb-8">
        Copyright ©2021 All rights reserved | Developed by Battulga
      </p>
    </footer>
  );
}

function Title(props) {
  return (
    <h4 className="my-10 font-bold text-lg text-white">{props.children}</h4>
  );
}

interface WorkTimeProps {
  day: string;
  time: string;
}
function WorkTime(props: WorkTimeProps) {
  return (
    <div className="flex w-full mb-5 mb-0:last-child">
      <div className="flex-1">
        <h4 className="">{props.day}</h4>
      </div>
      <div className="flex-1">
        <p className="">{props.time}</p>
      </div>
    </div>
  );
}

// src/components/Schedule.jsx
import { scheduleData, speakers } from "../data";
import React, { useState } from "react";
import Grid from "./Grid";
import SectionHeading from './ui/SectionHeading'
import shape1 from '../../src/assets/images/shapes/shape1.gif'
import shape2 from '../../src/assets/images/shapes/shape2.gif'
import shape3 from '../../src/assets/images/shapes/shape3.gif'

const ProgramView = ({ scheduleData }) => {
    const [activeDayIndex, setActiveDayIndex] = useState(0);
    return (
        <div className="grid grid-cols-3 border-4 border-black">
          {/* Days Column */}
          <div className="col-span-1 divide-y divide-black border-r-4 border-black">
            {scheduleData.map((day, idx) => (
              <div
                key={idx}
                onClick={() => setActiveDayIndex(idx)}
                className={`p-6 cursor-pointer text-center hover:bg-gold ${
                  idx === activeDayIndex ? "bg-gold text-black font-bold" : "bg-white"
                }`}
              >
                <span className="block text-lg font-bold font-headings">{day.day}</span>
                <span className="block text-md font-headings">{day.date}</span>
              </div>
            ))}
          </div>

          {/* Sessions Column */}
          <div className="col-span-2 flex flex-col justify-evenly divide-y divide-black bg-white">
            {scheduleData[activeDayIndex].sessions.map((s, i) => (
              <div key={i} className="grid grid-cols-4">
                {/* Time */}
                <div className="col-span-1 p-4 text-body-xs">
                  {s.startTime} - {s.endTime}
                </div>

                {/* Session Info */}
                <div className="col-span-3 p-4">
                  <h6 className="font-bold uppercase text-base">{s.title}</h6>
                  <p className="text-base my-3">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    )
}

const Schedule = ({ spacing }) => {
  const [activeTab, setActiveTab] = useState("program");

  return (
    <>
        <div className="flex justify-between">
            <img src={shape2} alt="shape gif" className="h-24" />
            <img src={shape1} alt="shape gif" className="h-24" />
            <img src={shape3} alt="shape gif" className="h-24" />
        </div>
        <div className={`py-section w-[80%] ml-[10%]`}>
        <div className="mx-auto">
            
            {/* Header */}
            <SectionHeading>SCHEDULE</SectionHeading>

            {/* Tabs */}
            <div className="flex">
            <button className={`bg-gold text-black font-medium px-4 py-2 border border-black cursor-pointer hover:bg-gold ${activeTab === "program" ? 'bg-gold': 'bg-white'}`}
                onClick={() => setActiveTab("program")}>
                Program view
            </button>
                <button className={`bg-gold text-black font-medium px-4 py-2 border border-black cursor-pointer hover:bg-gold ${activeTab === "speakers" ? 'bg-gold': 'bg-white'}`}
                onClick={() => setActiveTab("speakers")}>
                Speaker view
            </button>
            </div>

            {activeTab === "program" ? <ProgramView scheduleData={scheduleData} /> : <Grid items={speakers} />}
        </div>
        </div>
        <div className="flex justify-between">
            <img src={shape1} alt="shape gif" className="h-24" />
            <img src={shape3} alt="shape gif" className="h-24" />
            <img src={shape2} alt="shape gif" className="h-24" />
        </div>
    </>
  );
};

export default Schedule;
// src/components/Schedule.jsx
import { scheduleData, speakers } from "../data";
import React, { useState } from "react";
import Grid from "./Grid";
import SectionHeading from './ui/SectionHeading'

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
                className={`p-6 cursor-pointer text-center ${
                  idx === activeDayIndex ? "bg-gold text-black font-bold" : "bg-white"
                }`}
              >
                <span className="block text-lg font-bold font-headings">{day.day}</span>
                <span className="block text-md font-headings">{day.date}</span>
              </div>
            ))}
          </div>

          {/* Sessions Column */}
          <div className="col-span-2 flex flex-col divide-y divide-black">
            {scheduleData[activeDayIndex].sessions.map((s, i) => (
              <div key={i} className="grid grid-cols-4">
                {/* Time */}
                <div className="col-span-1 p-4 text-body-xs">
                  {s.startTime} - {s.endTime}
                </div>

                {/* Session Info */}
                <div className="col-span-3 p-4">
                  <h5 className="font-bold">{s.title}</h5>
                  <p className="text-body-xs">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    )
}

const Schedule = () => {
  const [activeTab, setActiveTab] = useState("program");

  return (
    <div className="mb-48 mt-24">
      <div className="mx-auto">
        {/* Header */}
        <SectionHeading>SCHEDULE</SectionHeading>

        {/* Tabs */}
        <div className="flex border-b border-gray-400 mb-6">
          <button className={`bg-gold text-black font-medium px-4 py-2 border border-black cursor-pointer ${activeTab === "program" ? 'bg-gold': 'bg-white'}`}
            onClick={() => setActiveTab("program")}>
            Program view
          </button>
          <button className={`bg-gold text-black font-medium px-4 py-2 border border-black cursor-pointer ${activeTab === "speakers" ? 'bg-gold': 'bg-white'}`}
          onClick={() => setActiveTab("speakers")}>
            Speaker view
          </button>
        </div>

        {activeTab === "program" ? <ProgramView scheduleData={scheduleData} /> : <Grid items={speakers} />}
      </div>
    </div>
  );
};

export default Schedule;
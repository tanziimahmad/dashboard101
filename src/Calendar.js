import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const Calendar = () => {
  return (
    <div>
      <h1>Calendar</h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: "event 1", date: "2023-06-21" },
          { title: "event 1", date: "2023-06-21" },
          { title: "event 2", date: "2023-06-22" },
        ]}
      />
    </div>
  );
};

export default Calendar;

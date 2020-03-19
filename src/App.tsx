import React from "react";

const WORKING_HOURS = [
  // Lundi
  { dayNumber: 0, opensAt: "08:00", closesAt: "12:00" },
  { dayNumber: 0, opensAt: "13:00", closesAt: "16:00" },

  // Mardi
  { dayNumber: 1, opensAt: "08:00", closesAt: "12:00" },
  { dayNumber: 1, opensAt: "13:00", closesAt: "16:00" },

  // Mercredi
  { dayNumber: 2, opensAt: "08:00", closesAt: "12:00" },
  { dayNumber: 2, opensAt: "13:00", closesAt: "16:00" },

  // Jeudi
  { dayNumber: 3, opensAt: "08:00", closesAt: "10:00" },

  // Vendredi
  { dayNumber: 4, opensAt: "08:00", closesAt: "10:00" },
  { dayNumber: 4, opensAt: "14:00", closesAt: "16:00" },

  // Samedi
  { dayNumber: 5, opensAt: "08:00", closesAt: "16:00" },

  // Dimanche
  { dayNumber: 6, opensAt: "08:00", closesAt: "10:00" },
  { dayNumber: 6, opensAt: "14:00", closesAt: "16:00" }
];

const weekday = new Array(7);
weekday[0] = "Lundi";
weekday[1] = "Mardi";
weekday[2] = "Mercredi";
weekday[3] = "Jeudi";
weekday[4] = "Vendredi";
weekday[5] = "Samedi";
weekday[6] = "Dimanche";

export default () => {
  const renderWorkingHours = () => {
    let todaysDay = new Date().getDay() - 1;
    todaysDay = todaysDay === -1 ? 6 : todaysDay;

    const toRender = [];

    for (let index = 0; index < WORKING_HOURS.length; index++) {
      const currentDay = WORKING_HOURS[index];
      const nextDay = WORKING_HOURS[index + 1];

      const isTwoPartDay =
        nextDay && currentDay.dayNumber === nextDay.dayNumber;

      if (isTwoPartDay) {
        toRender.push(
          <div
            style={{
              backgroundColor:
                todaysDay === currentDay.dayNumber ? "green" : "white",

              borderRadius: "5%",
              display: "grid",
              padding: "0.3rem",
              gridTemplateColumns: "150px 70px 70px 70px 70px"
            }}
            key={currentDay.dayNumber}
          >
            <span>
              <strong>{weekday[currentDay.dayNumber]}</strong>
            </span>
            <span>{currentDay.opensAt}</span>
            <span>{currentDay.closesAt} </span> <span>{nextDay.opensAt}</span>
            <span>{nextDay.closesAt}</span>
          </div>
        );
        index++;
      } else {
        toRender.push(
          <div
            style={{
              backgroundColor:
                todaysDay === currentDay.dayNumber ? "#39CCCC" : "",
              borderRadius: "5px",
              display: "grid",
              padding: "0.3rem",
              gridTemplateColumns: "150px 70px 70px"
            }}
            key={currentDay.dayNumber}
          >
            <span>
              <strong>{weekday[currentDay.dayNumber]}</strong>
            </span>
            <span>{currentDay.opensAt}</span>
            <span>{currentDay.closesAt}</span>
          </div>
        );
      }
    }
    return toRender;
  };

  return (
    <div>
      <h1>Horaires d'ouverture</h1>
      <div className="WorkingHoursContainer">{renderWorkingHours()}</div>
    </div>
  );
};

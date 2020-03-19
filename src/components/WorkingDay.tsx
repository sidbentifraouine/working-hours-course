import React from "react";
import { getTodaysDay, WEEK_DAYS } from "../utils/date";
import { IWorkingDay } from "../typings/working-days";

type Props = {
  currentDay: IWorkingDay;
  nextDay?: IWorkingDay;
};

export default function WorkingDay({ currentDay, nextDay }: Props) {
  const renderWorkingTimes = () => {
    if (nextDay) {
      return (
        <>
          <span>{currentDay.opensAt}</span>
          <span>{currentDay.closesAt}</span>
          <span>{nextDay.opensAt}</span>
          <span>{nextDay.closesAt}</span>
        </>
      );
    }

    if (!currentDay.opensAt && !currentDay.closesAt) {
      return <span style={{ gridArea: "auto" }}>Fermés toute la journée</span>;
    }

    if (currentDay.opensAt < "12:00") {
      return (
        <>
          <span>{currentDay.opensAt}</span>
          <span>{currentDay.closesAt}</span>
          <span>Fermés</span>
          <span>-</span>
        </>
      );
    } else {
      return (
        <>
          <span>Fermés</span>
          <span>-</span>
          <span>{currentDay.opensAt}</span>
          <span>{currentDay.closesAt}</span>
        </>
      );
    }
  };

  return (
    <div
      style={{
        backgroundColor:
          getTodaysDay() === currentDay.dayNumber ? "green" : "white",
        borderRadius: "5%",
        display: "grid",
        padding: "0.3rem",
        gridTemplateColumns: "150px 70px 70px 70px 70px",
      }}
    >
      <span>
        <strong>{WEEK_DAYS[currentDay.dayNumber]}</strong>
      </span>
      {renderWorkingTimes()}
    </div>
  );
}

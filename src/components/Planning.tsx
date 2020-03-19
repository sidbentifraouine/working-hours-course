import React, { ReactElement } from "react";
import { WEEK_DAYS, getTodaysDay } from "../utils/date";
import WorkingDay from "./WorkingDay";
import { IWorkingDay } from "../typings/working-days";

type Props = {
  workingDays: IWorkingDay[];
};

export default function Planning({ workingDays }: Props): ReactElement {
  const renderWorkingHours = () => {
    let planning = [];

    [0, 1, 2, 3, 4, 5, 6].forEach((day) => {
      const matchingDays = workingDays.filter((e) => {
        return e.dayNumber === day;
      });

      if (!matchingDays.length) {
        workingDays.push({
          dayNumber: day,
          opensAt: "",
          closesAt: "",
        });
      }
    });

    const sortedWorkingHours = workingDays.sort((a, b) => {
      if (a.dayNumber < b.dayNumber) {
        return -1;
      } else if (a.dayNumber === b.dayNumber) {
        return 0;
      } else {
        return 1;
      }
    });

    for (let index = 0; index < sortedWorkingHours.length; index++) {
      const currentDay = sortedWorkingHours[index];
      const nextDay = sortedWorkingHours[index + 1];

      const isTwoPartDay =
        nextDay && currentDay.dayNumber === nextDay.dayNumber;

      if (isTwoPartDay) {
        planning.push(
          <WorkingDay
            key={currentDay.dayNumber}
            currentDay={currentDay}
            nextDay={nextDay}
          />
        );
        index++;
      } else {
        planning.push(
          <WorkingDay key={currentDay.dayNumber} currentDay={currentDay} />
        );
      }
    }
    return planning;
  };

  return (
    <div>
      <h1>Horaires d'ouverture</h1>
      <div className="WorkingHoursContainer">{renderWorkingHours()}</div>
    </div>
  );
}

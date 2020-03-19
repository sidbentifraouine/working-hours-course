import React, { ReactElement } from "react";
import workingDays from "./data/working-days.json";
import Planning from "./components/Planning";

export default function App(): ReactElement {
  return <Planning workingDays={workingDays} />;
}

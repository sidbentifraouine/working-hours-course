export const WEEK_DAYS = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];

export function getTodaysDay(): number {
  const todaysDay = new Date().getDay() - 1;
  return todaysDay === -1 ? 6 : todaysDay;
}

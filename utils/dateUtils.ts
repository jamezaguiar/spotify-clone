import { getHours } from "date-fns";

export function getTimeOfDay(date = new Date()) {
  const hours = getHours(date);

  if (hours >= 5 && hours < 12) {
    return "morning";
  } else if (hours >= 12 && hours < 17) {
    return "afternoon";
  } else if (hours >= 17 && hours < 21) {
    return "evening";
  } else {
    return "night";
  }
}

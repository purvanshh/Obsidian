/**
 * Returns the number of days in a given month and year.
 * @param year Year number
 * @param month Month index (0-11, where 0 is January)
 */
export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

/**
 * Returns the day of the week for the first of the month,
 * adjusted for a Monday-start calendar (0 = Monday, 6 = Sunday).
 * @param year Year number
 * @param month Month index (0-11, where 0 is January)
 */
export function getFirstDayOfMonth(year: number, month: number): number {
  const day = new Date(year, month, 1).getDay();
  // Adjust Sunday (0) to index 6, and other days to day - 1
  return day === 0 ? 6 : day - 1;
}

/**
 * Month names list
 */
export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

import { getDaysInMonth, getFirstDayOfMonth } from './date-utils';

/**
 * Validates date math calculations, leap year checks, and Monday-start calendar offsets.
 */
export function runDateMathTests(): void {
  // Test 1: January 2026 has 31 days
  const janDays = getDaysInMonth(2026, 0);
  if (janDays !== 31) {
    throw new Error(`getDaysInMonth failed: expected January to have 31 days, got ${janDays}`);
  }

  // Test 2: February 2026 (non-leap year) has 28 days
  const febDaysNonLeap = getDaysInMonth(2026, 1);
  if (febDaysNonLeap !== 28) {
    throw new Error(`getDaysInMonth failed: expected Feb 2026 to have 28 days, got ${febDaysNonLeap}`);
  }

  // Test 3: February 2028 (leap year) has 29 days
  const febDaysLeap = getDaysInMonth(2028, 1);
  if (febDaysLeap !== 29) {
    throw new Error(`getDaysInMonth failed: expected Feb 2028 to have 29 days, got ${febDaysLeap}`);
  }

  // Test 4: July 1, 2026 is a Wednesday (Monday-start index 2)
  const wednesdayIndex = getFirstDayOfMonth(2026, 6); // 6 = July
  if (wednesdayIndex !== 2) {
    throw new Error(`getFirstDayOfMonth failed: expected Wednesday index to be 2, got ${wednesdayIndex}`);
  }

  // Test 5: January 1, 2026 is a Thursday (Monday-start index 3)
  const thursdayIndex = getFirstDayOfMonth(2026, 0); // 0 = Jan
  if (thursdayIndex !== 3) {
    throw new Error(`getFirstDayOfMonth failed: expected Thursday index to be 3, got ${thursdayIndex}`);
  }
}

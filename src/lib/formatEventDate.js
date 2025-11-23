/**
 * Formats a date string into Indian English format (IST timezone)
 * @param {string} isoString - The ISO date string to format
 * @param {'full'|'short'|'time'} [format='full'] - Format type
 * @returns {string} The formatted date string (e.g. "Monday, 1 January 2026")
 *
 * @example
 * formatEventDate("2026-01-01T00:00:00.000Z", "full")  // "Monday, 1 January 2026"
 * formatEventDate("2026-01-01T00:00:00.000Z", "short") // "1 January 2026"
 * formatEventDate("2026-01-01T12:00:00.000Z", "time")  // "05:30 PM"
 */
export const formatEventDate = (isoString, format = 'full') => {
  const date = new Date(isoString);

  const formats = {
    full: {
      weekday: 'long',    // Monday, Tuesday, etc.
      day: 'numeric',     // 1, 2, 3...
      month: 'long',      // January, February, etc.
      year: 'numeric',    // 2026
      timeZone: 'Asia/Kolkata'
    },
    short: {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'Asia/Kolkata'
    },
    time: {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,       // Show AM/PM
      timeZone: 'Asia/Kolkata'
    }
  };

  // Time format only
  if (format === 'time') {
    return date.toLocaleTimeString('en-IN', formats.time);
  }

  // Date format
  const formatted = date.toLocaleDateString('en-IN', formats[format]);

  // Capitalize first letter for clean appearance
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};

// ✅ Example usage:
// console.log(formatEventDate("2026-01-01T00:00:00.000Z", "full"));
// Output: "Thursday, 1 January 2026"

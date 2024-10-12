/**
 * Trims excessive spaces from a given text.
 *
 * @param text - The text to trim excessive spaces from.
 * @returns The text with excessive spaces trimmed.
 */
export function trimExcessiveSpaces(text: string): string {
  if (typeof text !== "string") {
    return ''
  }
  return text.replace(/\s{3,}/g, " ");
}

/**
 * Removes "/login" from the end of a string if it exists.
 *
 * @param text - The input string.
 * @returns The modified string.
 */
export function trimLoginFromEnd(text: string): string {
  return text.endsWith("/login") ? text.slice(0, -6) : text;
}

/**
 * Formats a price value as a string with currency symbol.
 *
 * @param price - The price value to format.
 * @returns The formatted price as a string.
 */
export function formatPrice(price: number): string {
  const roundedPrice = price.toFixed(2);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formatter.format(Number(roundedPrice));
}

/**
 * Formats a date based on the provided format.
 *
 * @param date - The date to format.
 * @param format - The format to use for formatting the date.
 * @returns The formatted date as a string.
 */
export function formatDate(date: string): string {
  const $date = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };

  return new Intl.DateTimeFormat("en-US", options).format($date);
}

export function extractTimeFromDate(dateString: string): string {
  const dateObject = new Date(dateString);

  let hours = dateObject.getUTCHours();
  const minutes = dateObject.getUTCMinutes();
  const seconds = dateObject.getUTCSeconds();

  const amPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${amPm}`;
}

export function extractDateFromDate(dateString: string): string {
  const dateObject = new Date(dateString);

  const day = dateObject.getUTCDate();
  const month = dateObject.getUTCMonth() + 1;
  const year = dateObject.getUTCFullYear();

  // Pad single-digit day and month with leading zeros
  const formattedDay = day.toString().padStart(2, "0");
  const formattedMonth = month.toString().padStart(2, "0");

  return `${formattedDay}-${formattedMonth}-${year}`;
}

export function getCurrentMonthInSpanish({
  capitalized = false,
}: {
  capitalized?: boolean;
}): string {
  const months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  const currentDate = new Date();
  const currentMonthIndex = currentDate.getMonth();
  const currentMonth = months[currentMonthIndex];

  const currentMonthCapitalized =
    currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1);

  return capitalized ? currentMonthCapitalized : currentMonth;
}

export function getCurrentYear(): number {
  const currentDate = new Date();
  return currentDate.getFullYear();
}

export function getDayFromDate(dateString: string): number {
  const dateObject = new Date(dateString);
  return dateObject.getUTCDate();
}

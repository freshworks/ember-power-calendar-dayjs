import dayjs from 'dayjs';
import weekdayPlugin from 'dayjs/plugin/weekday';
import localeData from 'dayjs/plugin/localeData';
import isoWeek from 'dayjs/plugin/isoWeek';
import duration from 'dayjs/plugin/duration';
import isBetweenPlugin from 'dayjs/plugin/isBetween';

dayjs.extend(localeData);
dayjs.extend(weekdayPlugin);
dayjs.extend(isoWeek);
dayjs.extend(duration)
dayjs.extend(isBetweenPlugin)

export function add(date, quantity, unit) {
  return dayjs(date)
    .add(quantity, unit)
    .toDate();
}

export function formatDate(date, format, locale = null) {
  if (locale) {
    return withLocale(locale, () => dayjs(date).format(format));
  } else {
    return dayjs(date).format(format);
  }
}

export function startOf(date, unit) {
  return dayjs(date)
    .startOf(unit)
    .toDate();
}

export function endOf(date, unit) {
  return dayjs(date)
    .endOf(unit)
    .toDate();
}

export function weekday(date) {
  return dayjs(date).weekday();
}

export function isoWeekday(date) {
  return dayjs(date).isoWeekday();
}

export function getWeekdaysShort() {
  return dayjs.weekdaysShort();
}

export function getWeekdaysMin() {
  return dayjs.weekdaysMin();
}

export function getWeekdays() {
  return dayjs.weekdays()
}

export function isAfter(date1, date2) {
  return dayjs(date1).isAfter(dayjs(date2));
}

export function isBefore(date1, date2) {
  return dayjs(date1).isBefore(dayjs(date2));
}

export function isSame(date1, date2, unit) {
  return dayjs(date1).isSame(dayjs(date2), unit);
}

export function isBetween(date, start, end, unit, inclusivity) {
  return dayjs(date).isBetween(start, end, unit, inclusivity);
}

export function diff(date1, date2) {
  return dayjs(date1).diff(dayjs(date2));
}

export function normalizeDate(dateOrDayjs) {
  if (
    dateOrDayjs === undefined ||
    dateOrDayjs === null ||
    dateOrDayjs === '' ||
    dateOrDayjs instanceof Date
  ) {
    return dateOrDayjs;
  } else {
    return dateOrDayjs.toDate();
  }
}

export function normalizeRangeActionValue(val) {
  return {
    date: val.date,
    dayjs: {
      start: val.date.start ? dayjs(val.date.start) : val.date.start,
      end: val.date.end ? dayjs(val.date.end) : val.date.end
    }
  };
}

export function normalizeMultipleActionValue(val) {
  return {
    date: val.date,
    dayjs: val.date ? val.date.map(e => dayjs(e)) : val.date
  };
}

export function normalizeCalendarDay(day) {
  day.dayjs = dayjs(day.date);
  return day;
}

export function withLocale(locale, fn) {
  let returnValue;
  if (locale) {
    let previousLocale = dayjs.locale();
    dayjs.locale(locale);
    returnValue = fn();
    dayjs.locale(previousLocale);
  } else {
    returnValue = fn();
  }
  return returnValue;
}

export function normalizeCalendarValue(value) {
  if (value) {
    return { date: value.date, moment: value.date ? dayjs(value.date) : undefined }
  }
  return { date: undefined, dayjs: undefined };
}

export function normalizeDuration(value) {
  if (value === null) {
    return null;
  }
  if (dayjs.isDuration(value)) {
    return value.asMilliseconds();
  }
  if (typeof value === "number") {
    return value;
  }
  if (typeof value === "string") {
    let [, quantity, units] = value.match(/(\d+)(.*)/);
    units = units.trim() || "days";
    return dayjs.duration(parseInt(quantity, 10), units).asMilliseconds();
  }
}

export function getDefaultLocale() {
  return dayjs.locale();
}

export function localeStartOfWeek(locale) {
  let now = new Date();
  let day = withLocale(locale, () => formatDate(startOf(now, 'week'), 'dddd'));
  let idx = withLocale(locale, getWeekdays).indexOf(day);
  return idx >= 0 ? idx : 0;
}

export function startOfWeek(day, startOfWeek) {
  while (isoWeekday(day) % 7 !== startOfWeek) {
    day = add(day, -1, "day");
  }
  return day;
}

export function endOfWeek(day, startOfWeek) {
  let eow = (startOfWeek + 6) % 7;
  while (isoWeekday(day) % 7 !== eow) {
    day = add(day, 1, "day");
  }
  return day;
}
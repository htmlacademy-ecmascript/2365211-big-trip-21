import dayjs from 'dayjs';
import durationPlugin from 'dayjs/plugin/duration.js';

dayjs.extend(durationPlugin);

/**
 *
 * @param {dayjs.ConfigType} value
 * @returns {string}
 */

function formatTime(value) {
  return dayjs(value).format('HH:mm');
}
/**
 *
 * @param {dayjs.ConfigType} value
 * @returns {string}
 */

function formatDate(value) {
  return dayjs(value).format('MMM D')
}

function formatDuration(valueFrom, valueTo) {
  const ms = dayjs(valueTo).diff(valueFrom);
  const duration = dayjs.duration(ms);

  if (duration.days()) {
    const ms = dayjs(valueTo).diff(valueFrom);
    return duration.format('DD[d] HH[h] mm[m]')
  }
  if (duration.hours()) {
    return duration.format('HH[h] mm[m]')
  }
  return duration.format('mm[m]')
}

/**
 *
 * @param {number} value
 * @returns {string}
 */

function formatNumber(value) {
   return value.toLocaleString();
}


console.log(formatDate('2023-03-18'))
console.log(formatTime('2023-03-18T13:00Z', '2023-03-18T13:05Z'))

function html(strings, ...values) {
  return strings.reduce((before, after, index) => {
    const value = values[index - 1];

    if (value === undefined) {
      return before + after;
    }

    if (Array.isArray(value)) {
      return before + value.join('') + after;
    }

    return before + value + after;
  });
}

export {html,
formatDate,
formatTime,
formatDuration,
};

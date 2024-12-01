import { DateTime } from 'luxon';

export const calculateTimeRemaining = (targetDate: DateTime ) => {
  const now = DateTime.now()
  const diff = targetDate.diff(now,['months','weeks','days','hours','minutes']).toObject()

  if (targetDate < now) {
    // The target date has already passed.
    return {
      months: 0,
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
    };
  }


  const minutes = Math.floor(diff.minutes ?? 0)
  const hours = Math.floor(diff.hours ?? 0)
  const days = Math.floor(diff.days ?? 0)
  const weeks = Math.floor(diff.weeks ?? 0)
  const months = Math.floor(diff.months ?? 0)

  return { months, weeks, days, hours, minutes };
};

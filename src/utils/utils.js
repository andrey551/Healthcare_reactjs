export const parseTime = (time) => {
    let ret = Number(time.slice(0, 2))
    if(ret < 12) return time.slice(0, 5) + " AM"
    else return ret-12 + time.slice(2, 5) + " PM"
}

export const roundFLoat = (value) => {
    return Number(value.toFixed(1))
}

export const distanceTime = (time) => {
    time = new Date(time);
      // Get the current time in milliseconds
  const currentTime = Date.now();

  // Calculate the time difference in milliseconds
  const timeDifference = currentTime - time;

  // Convert the time difference to seconds, minutes, hours, and days
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // Determine the appropriate time unit to display
  if (days > 0) {
    return days + ' days ago';
  } else if (hours > 0) {
    return hours + ' hours ago';
  } else if (minutes > 0) {
    return minutes + ' minutes ago';
  } else {
    return seconds + ' seconds ago';
  }
}
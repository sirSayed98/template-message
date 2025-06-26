export function getCurrentTimeFormatted() {
  const now = new Date();
  
  // Get hours and minutes
  let hours = now.getHours();
  const minutes = now.getMinutes();
  
  // Determine AM/PM
  const period = hours >= 12 ? 'PM' : 'AM';
  
  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 should be 12
  
  // Pad minutes with leading zero if needed
  const paddedMinutes = minutes.toString().padStart(2, '0');
  
  return `${hours}:${paddedMinutes} ${period}`;
}

function getDayName(dayNumber: number): string {
   const daysArray: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   const dayName: string = daysArray[new Date().getDay()];
   return dayName;
}
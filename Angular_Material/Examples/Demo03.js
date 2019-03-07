function getDayName(dayNumber) {
    var daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayName = daysArray[new Date().getDay()];
    return dayName;
}

"use strict";
exports.__esModule = true;
exports.convertMinutesToHourString = void 0;
function convertMinutesToHourString(minutesAmount) {
    var hours = Math.floor(minutesAmount / 60);
    var minutes = minutesAmount % 60;
    return "".concat(String(hours).padStart(2, '0'), ":").concat(String(minutes).padStart(2, '0'));
}
exports.convertMinutesToHourString = convertMinutesToHourString;

var now = new Date();
var newYear = new Date(now.getFullYear() + 1, 0, 1);
var timeDiff = newYear.getTime() - now.getTime();
var daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
console.log("До Нового года осталось " + daysLeft + " дней!");
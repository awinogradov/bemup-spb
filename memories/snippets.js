// DAY
(function () {
    var days      = [],
        date      = new Date(),
        day       = date.getDay(),
        month     = date.getMonth() + 1,
        month_str = month < 10 ? '0' + month : month;

    // Yes! This is don't work when today is 29-30 number of day,
    // but this is not problem - this is prototype ;-)
    days.push({ text : 'Ближайшее время', checked : true });
    days.push({ text : 'Сегодня (' + day + '.' + month_str + ')' });
    days.push({ text : 'Завтра (' + (day + 1)  + '.' + month_str + ')' });
    days.push({ text : 'Послезавтра (' + (day + 2)  + '.' + month_str + ')' });

    return days;
})()

options : [
    { text : 'Эконом от 199 Р', checked : true },
    { text : 'Комфорт от 250 Р' },
    { text : 'Бизнес от 750 Р' }
]

// HOUR
// (function () {
//     var hours = [],
//         date  = new Date();
//
//     for (var i = 0; i < 24; i++) {
//         hours.push({ text : i, checked : i == date.getHours() ? true : false });
//     }
//
//     return hours;
// })()

// MINUTES
// (function () {
//     var time    = [],
//         date    = new Date(),
//         minutes = Math.ceil(date.getMinutes()*0.1)/0.1;
//
//     for (var i = 0; i < 60; i += 5) {
//         time.push({ text : i, checked : i == minutes ? true : false });
//     }
//
//     return time;
// })()

export function randomDate(start, end = new Date()) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


export function getDate(date) {
    let splitList = date.split("/");
    return splitList[0];
}

export function changeDateDDMMYYYY(date) {
    return new Date(date).toJSON().slice(0, 10).split("-").reverse().join("/");
}

export function convertTimestamptoDatetime(timestamp) {
    const dateObject = new Date(parseInt(timestamp));
    return addDate(1, dateObject);
}

export function convertDateTimeToTimeStamp(stringDate) {
    if (stringDate) {
        let date = stringDate.split("/");
        let newDate = new Date(date[2], date[1] - 1, date[0]);
        return newDate.getTime();
    }
}

export function addDate(numDay = 2, date = new Date()) {
    Date.prototype.addDays = function (days) {
        let date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    };
    return changeDateDDMMYYYY(date.addDays(numDay));
}

// export function getWeekDay(date){
//     var weekday = ["Mon","Tues","Wed","Thurs","Fri","Sat","Sun"];
//     return weekday[date.getDay()];
// }
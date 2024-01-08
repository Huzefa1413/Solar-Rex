import moment from "moment";


export function TimestampToDate(timestamp) {
    var timestamp = 1609459200000; // Replace this with your actual timestamp

    // Convert timestamp to date and time using Moment.js
    var formattedDateTime = moment(timestamp).format('YYYY-MM-DD HH:mm:ss');
    
    return formattedDateTime;
}
let myDate = new Date();
console.log(typeof myDate,myDate); //object 2026-07-14T04:27:33.617Z
console.log(myDate.toDateString()); //Tue Jul 14 2026
console.log(myDate.toISOString()); //2026-07-14T04:29:18.848Z
console.log(myDate.toLocaleDateString()); //7/14/2026
console.log(myDate.toLocaleTimeString()); //4:30:00 AM
console.log(myDate.toString()); //Tue Jul 14 2026 04:30:18 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toTimeString()); //04:31:01 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toUTCString()); //Tue, 14 Jul 2026 04:31:34 GMT


let myTime = new Date(2023,0,19);
console.log(myTime.toLocaleString()); //1/19/2023, 12:00:00 AM

let myCreatedDate = new Date(2029,10,30,10,15,12);
console.log(myCreatedDate.toLocaleDateString()); //11/30/2029
console.log(myCreatedDate.toLocaleString()); //11/30/2029, 10:15:12 AM

// let dateCreated = new Date("2000-12-29");
// console.log(dateCreated.toLocaleString()); //12/29/2000, 12:00:00 AM

let dateCreated = new Date("01-28-2023");
console.log(dateCreated.toLocaleString()); //1/28/2023, 12:00:00 AM


/* TimeStamp */
let timeStamp = Date.now();
console.log(timeStamp); //1784004353439
console.log(dateCreated.getTime()); //1674864000000

/* Convert into sec */
console.log(Math.floor(timeStamp/1000)); //1784004492sec

let newDate= new Date();
console.log(newDate.getDay()); //2
console.log(newDate.getDate()); //14
console.log(newDate.getMonth()+1); //7
console.log(newDate.getFullYear()); //2026


newDate.toLocaleString("default",{
    weekday:'long'
})

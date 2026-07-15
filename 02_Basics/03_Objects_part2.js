const tinderUser = new Object(); //singleton Object

console.log(tinderUser); //{}

const tikTokUser = {}; //non-singleton object
console.log(tikTokUser); //{}


tikTokUser.email = "sammy@gmail.com";
tikTokUser.username="Samm";
tikTokUser.isLogin=true;
tikTokUser.gender="Male";
tikTokUser.age=29;

// console.log(tikTokUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "manish",
            lastname: "kumar"
        }
    }
};

console.log(regularUser.fullname.userfullname.firstname); //manish


/* Adding Objects */
const obj1 = {
    1:"a",
    2:"b",
}
const obj2 = {
    9:"a",
    3:"b",
}
const obj3 = {
    4:"a",
    5:"b",
}
const obj4 = {
    6:"a",
    7:"b",
}

const finalObject = Object.assign({},obj1,obj2,obj3,obj4);
console.log(finalObject); // { '1': 'a','2': 'b','3': 'b','4': 'a', '5': 'b','6': 'a' '7': 'b','9': 'a'}


const finalObj2 = {...obj1,...obj2,...obj3};
console.log(finalObj2); //{ '1': 'a', '2': 'b', '3': 'b', '4': 'a', '5': 'b', '9': 'a' }

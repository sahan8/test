// const user1 ={
//     id:1,
//     name:"sahan",
//     password:"123qwe",
//     login:function(){
//         console.log(this.name);
//     },
//     logout:()=>{
//         console.log("logout");
//     }
// }

// //console.log(user1);

// user1.login();
// user1.logout();



// class user{
//     constructor(){
//         this.id;
//         this.name;
//         this.password;
//     }
// }


// const user1 = new user ();
// user1.name="sahan";
// user1.password="pass";
// user1.id=1;

// const user2 = new user ();
// user1.name="escobar";
// user1.password="safsfs";
// user1.id=2;


// console.log(user1);




class user{
    id;
    name;
    password;

    login=()=>{
        console.log(this.name);
    }
}

const user1 = new user();
user1.name="sahan";
user1.id=1;
user1.password="s123";
console.log(user1);









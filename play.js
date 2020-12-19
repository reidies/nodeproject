// const name = 'Max';
// let age = 29;
// const hasHobbies = true;

// age = 30;


// const summarizeUser =  (userName, userAge, userHasHobby) =>{
//     return 'Name is ' + userName + ' age is ' + userAge + ' and the user has hobbies ' + userHasHobby;
// }
// const add = (a,b) => a+b;
// const addone = a => a+1;
// const addRandom = () => 1+2;
// console.log(addone(1));

// console.log(summarizeUser(name,age, hasHobbies));

const person = {
    name : 'Max',
    age: 20,
    greet()  {
        console.log('Hi Iam '+ this.name)
    }
};

const printName = ({name}) => {
    console.log(name);
};

printName(person);

const {name, age} = person;
console.log(name,age);

// person.greet();

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push("programming");
// for (let hobby of hobbies){
//     console.log(hobby);
// }
// console.log(hobbies.map(hobby => {
//     return 'Hobby: ' + hobby;
// }));
// console.log(hobbies);
// const coppiedArray = [...hobbies];

// console.log(coppiedArray);

// const toArry = (...args) => {
//     return args;
// };

// console.log(toArry(1,2,3,4));

const fetchData = () =>{
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {resolve('done')} ,1500);
    }); 

    return promise;
};

setTimeout(()=> {
    console.log('Time is done!');
    fetchData().then(text =>{
        console.log(text);
        return fetchData();
    }).then(text2 =>{
        console.log(text2);
    });
}, 2000);
console.log('hello');
console.log('hi');
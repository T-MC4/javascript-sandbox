const todo = new Object();

todo.title = "My todo";
todo.text = "This is my todo";
todo.complete = false;

x = todo;

console.log(x);

const person = {
    address: {
        street: {
            name: "Main",
            number: 1000,
            zip: 1000,
        }
    }
}

x = person.address.street.name

console.log(x)

const obj1 = { a:1, b:2, c:3 };
const obj2 = { d:4, e:5, f:6 };

const obj3 = {obj1,obj2};
const obj4 = Object.assign({}, obj1, obj2);

console.log(obj4);

const todos = [
    { id: 1, text: "Take out trash", isCompleted: true },
    { id: 2, text: "Meeting with boss", isCompleted: true },
    { id: 3, text: "Dentist appt", isCompleted: false },
]

x = todos[1].text;
x = Object.keys(todo)
x = Object.values(todo)
x = Object.entries(todo)

x = todo.hasOwnProperty('age')

console.log(x);


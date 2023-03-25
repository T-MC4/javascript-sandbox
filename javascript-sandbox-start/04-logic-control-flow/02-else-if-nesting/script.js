const d = new Date(2023, 9, 20, 18, 0, 0, 0);
const hour = d.getHours();
const month = d.getMonth();
console.log(month+1)

if (hour < 18 || month < 10) {
    console.log("Good day");

    if (hour === 12)
        console.log("It's noon");
}
else if (hour < 20 && month >= 10) {
    console.log("Good evening");
}
else {
    console.log("Good night");
}
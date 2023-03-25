let a = 0;

// if (!a) {
//     a = 20;
// };

// a = a || 20;

// If a is false, then set it to 20
a ||= 20;

// If a is true, then set it to 20
a &&= 20;

// if a is null or undefined, then set it to 20
a ??= 20;


console.log(a);


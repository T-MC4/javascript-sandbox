const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

a.forEach(item => console.log(item));

a.forEach(function (element) {
    console.log(element);
    });

for (const keys in a) {
     console.log(a[keys]);
 }

for (const keys in a) {
    console.log(keys);
}
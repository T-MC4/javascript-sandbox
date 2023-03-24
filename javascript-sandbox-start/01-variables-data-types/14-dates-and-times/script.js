x = new Date()

// d = x.getFullYear()

d = x.getMonth()

d = x.getDate()

d = x.getHours()

d = x.getMinutes()

d = x.getSeconds()

// d = x.getMilliseconds()

// d = `${x.getFullYear()}-${x.getMonth()+1}-${x.getDate()}`

// d = Intl.DateTimeFormat('en-US').format(x)

d = x.toLocaleString('en-US',{
    hour: 'numeric', 
    minute: 'numeric', 
    second: 'numeric', 
    hour12: true,
    timeZone: 'America/Phoenix'
});

console.log(d)
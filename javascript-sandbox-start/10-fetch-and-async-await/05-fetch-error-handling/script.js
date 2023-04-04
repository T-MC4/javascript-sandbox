fetch('http:httpstat.us/200')
    .then((res) => {
        if (res.status === 404) {
            throw new Error('Not Found');
        } else if (res.status === 500) {
            throw new Error('Server Error');
        } else if (res.status !== 200) {
            throw new Error('Request Failed');
        }
    })
    // .then((res) => {
    //     if (res.ok) {
    //         console.log('Success');
    //     } else {
    //         throw new Error();
    //     }
    // })
    .then(() => console.log('success'))
    .catch((err) => console.log(err));

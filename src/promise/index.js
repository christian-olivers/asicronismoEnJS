const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('Bien echo');
        } else {
            reject('Opps!');
        }
    })
}

somethingWillHappen()
.then(respo => console.log(respo))
.catch(err => console.error(err));

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True')
            }, 2000)
        } else {
            const error = new Error('Opps!');
            reject(error);
        }
    });
}


somethingWillHappen2() 
    .then(response => console.log(response))
    .catch(err => console.log(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('array of results', response);
    })
    .catch(err => console.log(err));
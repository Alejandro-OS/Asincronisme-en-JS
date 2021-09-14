const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('hey esta correcto');
        } else {
            reject('no se cumplio');
        }
    })
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err))

somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('true')
            },2000)
        } else {
            const error = new Error('whoppppps')
            reject(error)
        }
    })
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err))


Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('array de respuestas', response)
    })
    .catch(err => {
        console.error(err)
    })
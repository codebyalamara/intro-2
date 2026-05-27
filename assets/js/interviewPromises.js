const cl = console.log

function hrCall () {
    // API call
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let success = Math.random() > 0.2 ? true : false

            if (success) {
                let res = `Candidate is shortlisted for 1st Interview.`
                resolve(res)

            } else {
                let err = `Looking for a candidate.`
                reject(err)
            }

        }, 900)
    })
}


function firstRound () {
    // API call
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let success = Math.random() > 0.4 ? true : false

            if (success) {
                let res = `Candidate is shortlisted for 2nd round.`
                resolve(res)

            } else {
                let err = `Candidate is not good in basics.`
                reject(err)
            }

        }, 600)
    })
}



function secondRound () {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let success = Math.random() > 0.4 ? true : false

            if (success) {

                let res = `Candidate is shortlisted for final round.`
                resolve(res)

            } else {

                let err = `Candidate is not able to explain code.`
                reject(err)
            }

        }, 500)
    })
}


function finalRound () {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let success = Math.random() > 0.5 ? true : false

            if (success) {

                let res = `Candidate is selected.`
                resolve(res)

            } else {

                let err = `Candidate is rejected in final round.`
                reject(err)
            }

        }, 400)

    })
}

function finalRound () {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let success = Math.random() > 0.5

            if (success) {

                let res = `Candidate is selected for given Profile !!!`
                resolve(res)

            } else {

                let err = `Candidate is not able to explain his/her project`
                reject(err)
            }

        }, 400)

    })
}



hrCall()
    .then(res => {
        cl(res)
        return firstRound() // Promise
    })
    .then(res => {
        cl(res)
        return secondRound() // Promise
    })
    .then(res => {
        cl(res)
        return finalRound() // Promise
    })
    .then(res => {
        Swal.fire(res)
    })
    .catch(err => {
        Swal.fire({
            title: err,
            icon: 'error',
            timer: 3000
        })
    })
















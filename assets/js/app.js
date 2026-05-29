const cl = console.log
const spinner = document.getElementById('spinner')

function fetchProdId(){

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let success = Math.random() > .2;

            if(success){
                let res = `Product ID fetched successfully !!!`;
                resolve(res)
            }else{
                let err = `Something went wrong while fetching Product ID`;
                reject(err)
            }

        }, 900);

    })
}

function fetchProdDetails(){

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let success = Math.random() > .4;

            if(success){
                let res = `Product details fetched successfully !!!`;
                resolve(res)
            }else{
                let err = `Something went wrong while fetching Product Details`;
                reject(err)
            }

        }, 700);

    })
}

function fetchProdReviews(){

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let success = Math.random() > .5;

            if(success){
                let res = `Products reviews fetched successfully !!!`;
                resolve(res)
            }else{
                let err = `Something went wrong while fetching Product Reviews`;
                reject(err)
            }

        }, 500);

    })
}

spinner.classList.remove('d-none')

fetchProdId()
    .then(res => {
        cl(res)
        return fetchProdDetails()
    })
    .then(res => {
        cl(res)
        return fetchProdReviews()
    })
    .then(res => {
        cl(res)
    })
    .catch(err => {
        cl(err)

        Swal.fire({
            title: err,
            icon: 'error',
            timer: 3000
        })
    })
    .finally(() => {
        spinner.classList.add('d-none')
    })
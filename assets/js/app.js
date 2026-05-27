const cl = console.log

const spinner = document.getElementById('spinner')
const info = document.getElementById('info')
const fetchBtn = document.getElementById('fetchBtn')

function fetchProdId(){
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let success = Math.random() > .5

            if(success){
                let res = {
                    prodId : 'P101'
                }
                resolve(res)
            }else{
                let err = `Something went wrong while fetching Product ID`
                reject(err)
            }

        }, 900)
    })
}

function fetchProdDetails(){
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let success = Math.random() > .5

            if(success){
                let res = {
                    prodName : 'Samsung S25',
                    price : 85000,
                    category : 'Mobile'
                }
                resolve(res)
            }else{
                let err = `Something went wrong while fetching Product Details`
                reject(err)
            }

        }, 700)
    })
}

function fetchProdReviews(){
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let success = Math.random() > .5

            if(success){
                let res = [
                    {
                        user : 'Aman',
                        rating : 4,
                        review : 'Good product'
                    },
                    {
                        user : 'Neha',
                        rating : 5,
                        review : 'Excellent phone'
                    }
                ]
                resolve(res)
            }else{
                let err = `Something went wrong while fetching Product Reviews`
                reject(err)
            }

        }, 500)
    })
}

fetchBtn.addEventListener('click', () => {

    info.innerHTML = ''
    spinner.classList.remove('d-none')

    fetchProdId()
        .then(res => {
            cl(res)

            info.innerHTML = `
                <div class="alert alert-info">
                    Product ID : ${res.prodId}
                </div>
            `

            return fetchProdDetails()
        })
        
        .then(res => {
    cl(res)

    let result = `<h5>Product Reviews</h5>`

    res.forEach(review => {
        result += `
            <p>
                ${review.user} - ${review.rating}⭐ - ${review.review}
            </p>
        `
    })

    info.innerHTML += result

    Swal.fire({
        title : 'Product Data Loaded Successfully !!!',
        icon : 'success',
        timer : 3000
    })
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
})
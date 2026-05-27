const cl = console.log

function fetchProdId () {
    // API call >> Async JS (Non-Blocking)

    setTimeout(() => {

        let err = Math.random() > 0.5 ? false : true

        if (!err) {

            cl(`Product ID fetch successfully !!!`)
            fetchProdById()

        } else {

            cl(`Something went wrong while fetching ID !!!`)
        }

    }, 900)
}


function fetchProdById () {
    // API call >> Async JS (Non-Blocking)

    setTimeout(() => {

        let err = Math.random() > 0.5 ? false : true

        if (!err) {

            cl(`Product data fetched successfully !!!`) // templating
            fetchReviews()

        } else {

            cl(`Something went wrong while fetching Product data !!!`)
        }

    }, 700)
}

function fetchReviews () {
    // API call >> Async JS (Non-Blocking)

    setTimeout(() => {

        let err = Math.random() > 0.5 ? false : true

        if (!err) {

            cl(`Product Reviews fetched successfully !!!`)

        } else {

            cl(`Something went wrong while fetching Product Reviews !!!`)
        }

    }, 500)
}

fetchProdId()
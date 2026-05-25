const cl = console.log

const blogForm = document.getElementById('blogForm')
const titleControl = document.getElementById('title')
const contentControl = document.getElementById('content')

blogForm.addEventListener('submit', onBlogAdd)

function onBlogAdd(eve){
    eve.preventDefault()

    let promise = new Promise((resolve, reject) => {

        setTimeout(() => {

            let success = Math.random() > .5 ? true : false

            if(success){
                resolve('Blog Added Successfully !!!')
            }else{
                reject('Something went wrong !!!')
            }

        }, 1000)
    })

    promise
        .then((res) => {
            Swal.fire({
                icon : 'success',
                title : res
            })

            blogForm.reset()
        })
        .catch((err) => {
            Swal.fire({
                icon : 'error',
                title : err
            })
        })
}







/*
const cl = console.log;

// promise is a JS Object which gives some value in futre 
// It is used to handle Async Operations in JS


// promies has 3 States 

// pading == waiting for result 
//  Fullfill/resolve == Action related to promies is success
// Reject == Action related  to promies is fail

// Promise over Callback functions
// 1 it improves readability of the code
// 2 Better Error Handling
// 3 It handles Async operations in better way
// 4 Better flow of control definition

let promise = new Promise((resolve, reject) => {

    setTimeout(() => {

        // API > Async JS (Non-Blocking)
        let success = Math.random() > .5 ? true : false

        if (success) {
            let data = `Fetched data successfully !!!`
            resolve(data)

        } else {
            let err = `Something went wrong !!!`
            reject(err)
        }

    }, 500);

})

promise
    .then((res) => {
        cl(res)
    })
    .catch((err) => {
        cl(err)
    })

*/





/*
function CreateStudent(fn, lname, email, contact) {
    // var this = {}
    this.fname = fn
    this.lname = lname
    this.contact = contact
    this.email = email
    // return this
}

let std = new CreateStudent("Jhon", "Doe", "jd@gmail.com", 1234567890)

cl(std)
*/


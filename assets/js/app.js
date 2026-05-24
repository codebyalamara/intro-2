const cl = console.log

const blogForm = document.getElementById('blogForm')
const titleControl = document.getElementById('title')
const contentControl = document.getElementById('content')

const blogsArr = [
    {
        title: 'ES6',
        content:
        'ES6 Senior Angular developers traditionally pushed all state into services.'
    },
    {
        title: 'Promises and Async-Await',
        content:
        'Promises and Async-Await Senior Angular developers traditionally pushed all state into services.'
    }
]

function onBlogSubmit (eve) {
    eve.preventDefault()

    let NEW_BLOG = {
        title: titleControl.value,
        content: contentControl.value
    }

    cl(NEW_BLOG)
    addBlog(NEW_BLOG)
}

function addBlog (newBlog) {

    // API call >> Async JS (Non-Blocking)

    setTimeout(() => {

        let success = Math.random() > 0.5 ? true : false

        if (success) {

            blogsArr.push(newBlog)

            fetchBlogs()

            cl('New Blog created successfully !!!')

            Swal.fire({
                title: 'New Blog created successfully !!!',
                icon: 'success',
                timer: 3000
            })

            blogForm.reset()

        } else {

            cl('Something went wrong while creating new Blog !!!')

            Swal.fire({
                title: 'Something went wrong while creating new Blog !!!',
                icon: 'error',
                timer: 3000
            })

        }

    }, 700)
}


function fetchBlogs () {

    // API call >> Async JS (Non-Blocking)

    setTimeout(() => {

        let success = Math.random() > 0.5 ? true : false

        if (success) {

            let data = blogsArr

            cl('Blogs fetched successfully !!!') // templating

        } else {

            cl('Something went wrong while fetching Blogs data !!!')

        }

    }, 400)
}

blogForm.addEventListener('submit', onBlogSubmit)
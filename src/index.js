fetch('http://localhost:3000/images')
    .then(response => response.json())
    .then((dog) => renderDog(dog))
fetch('http://localhost:3000/comments')
    .then(response => response.json())
    .then((comments) => renderDog(comments))

function renderDog(data) {
    console.log(data)

    const span = document.querySelector('#like-count')
    

    const button = document.querySelector('#like-button')
    button.id = 'like-button'

    button.addEventListener('click', addLikes)

    function addLikes() {
        data.likes = parseInt(1) + (' likes')
        span.textContent = `${data.likes}`
    }

}





const form = document.querySelector('#comment-form')

form.addEventListener('submit', (e) => handleSubmit(e))


function handleSubmit(e) {
    e.preventDefault()

    let previousComment = document.querySelector('#comments-list').textContent
    let newComment = e.target['comment'].value

    let allComments = previousComment + newComment

    const commentBar = document.querySelector('#comments-list')

    commentBar.textContent = allComments
}
        



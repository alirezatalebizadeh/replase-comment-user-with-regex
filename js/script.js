const commentElement = document.querySelector('#comment')

commentElement.addEventListener('keyup', function (event) {
    let commentValue = event.target.value // :)
    commentElement.value = commentValue.replace(/(:\)|:)\)/g, '😀')


    // commentElement.value = commentValue.replace(/:\(/g, '😢')
    // commentElement.value = commentValue.replace(/:\//g, '😐')
})
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch("https://dog.ceo/api/breeds/image/random/4")
.then(respose => respose.json())
.then(json => renderImage(json))



console.log('%c HI', 'color: firebrick')

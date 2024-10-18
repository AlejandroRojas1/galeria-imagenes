const container = document.getElementById('container')

let images;
const getData = async ()=> {
    try {
        const res = await fetch('https://dog.ceo/api/breed/hound/images/random/50')
        const response = await res.json();
        return response
    } catch(error) {
        console.error('Error:', error)
    }
}
getData().
then((data)=> {
    images = data.message.map((image)=> {
        return `<span class="rounded overflow-hidden m-2"><img class="images w-100 h-100 object-fit-cover" src=${image} alt="dog"/></span>`
    })
    container.innerHTML = images.join('')
})
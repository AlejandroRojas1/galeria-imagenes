const container = document.getElementById('container')

let data;

const getData = async ()=> {
    try {
        const res = await fetch('https://dog.ceo/api/breed/hound/images/random/10')
        const response = await res.json();
        data = response;
    } catch(error) {
        console.error('Error:', error)
    }
}
getData().
then(()=> console.log(data))
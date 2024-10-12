const container = document.getElementById('container')

const getData = async()=> {
    try {
        const response = await fetch('https://dog.ceo/api/breed/hound/images');
        return response.json();
    } catch (error) {
        console.error
    }
}
const data = getData();


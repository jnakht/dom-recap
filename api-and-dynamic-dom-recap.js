console.log('first')

const dynamicAPI = async () => {
    const api = await fetch('https://randomuser.me/api/?results=10');
    const data = await api.json();
    console.log(data);
    console.log('data loaded')
}
 dynamicAPI();

const name  = 'jisan';
console.log('second');
const cities = ['Madrid', 'Paris', 'Londres', 'Berlin'];

const randomString = ()=>{
    const string = cities[Math.floor(Math.random() * cities.length)]
    return string;
}

module.exports = randomString;
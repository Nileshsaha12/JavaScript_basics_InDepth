// forin loop is used to iterate in Object and other datatypes

const myObject = {
    'game1' : 'GTA5',
    'game2' : 'Spiderman'
}

for (const key in myObject) {
    //console.log(`${key} for ${myObject[key]}`);
}


const arr = ["java" ,"py" ,"cpp", "rb"]
for (const key in arr) {
   // console.log(`${key} for ${arr[key]}`);
}



const map = new Map()

map.set('IN' , "India")
map.set('USA' , "United states of America")
map.set('FR' , "France")
map.set('IN', "INdia")

for (const key in map) {
    console.log(`${key}`);
}// maps are not iterable by forin loop
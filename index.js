
const blame=[1,2,3,5,5,];
function except(array, excluded){
    const slim=[];
    for(let element of blame)
    if (!excluded.includes(element))
    slim.push(element);
    return slim;
}
const thin= except(blame,[2])
console.log(thin)


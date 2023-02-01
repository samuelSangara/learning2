const gender=[,1,2,3,,4,5,6,6,6,6,5,5,5,]


function countOccurence(array,searcheElement){
    let gen=0;
    for(let element of gender)
    if (element === searcheElement)
    gen ++;
    return gen;
}
const count= countOccurence(gender,6);

console.log(count)


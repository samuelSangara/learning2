


const browser=[1,2,3,4,5,6,7,8,9];

function move(array, index, offset){
    const position=index+  offset;
    if(array.length=== 0 || position < 0){
        console.error('urgent come and change it.')
    }
    const back=[...browser];
    const element=browser.splice(index, 1)[0]
    back.splice(position, 0, element)
    return back;
}

const hire= move(browser,0,15)
console.log(hire)

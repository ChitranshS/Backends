// Map and Filter
// Multiply all the items in a list by 2 using map
//MAP
let list = [1,2,3,4,5]
let ans = list.map((i)=>{
    return i*2
})
console.log(ans)
//FILTER
// Filter out all the even numbers using filter
let list1 = [1,2,3,4,5]
let ans1 = list.filter((i)=>{
    if (i%2==0)
    return true
    else
    return false
})
console.log(ans1)
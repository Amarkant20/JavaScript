const myNumbers = [1,2,3,4,5]



// const myTotal = myNumbers.reduce(function (acc, currval) {
//     console.log(`Acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)


// const myTotal = myNumbers.reduce( (acc, currval) => acc + currval, 0)
// console.log("Total: ",myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "Python course",
        price: 999
    },
    {
        itemName: "Mobile dev course",
        price: 5999
    },
    {
        itemName: "Data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(`Total Price: ${totalPrice}`);
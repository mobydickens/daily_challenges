// let cart = [
//     {
//       id: 1,
//       product: 'Bob Ross Paint Kit',
//       price: 45.99,
//       quantity: 2,
//     },
//     {
//       id: 2,
//       product: 'Paint Palette',
//       price: 7.99,
//       quantity: 3,
//     },
//     {
//       id: 3,
//       product: 'Paint Thinner',
//       price: 15.99,
//       quantity: 2,
//     },
//   ];
  
// //classes CREATE objects - multiple instances of the same type of object

// class Cart {
//     constructor(items, taxRate) {
//       this.cart = items;
//       this.taxRate = taxRate;
//       this.total;
//       this.calculateTotal();
//     }
   
//     removeItem(id) {
//       let index = this.cart.findIndex(item => item.id === id)

//       //check if index was not found
//       if(index === -1) {
//         return 'invalid id';
//       }

//       //check if there is only one of this item
//       if(this.cart[index].quantity === 1) {
//         this.cart.splice(index, 1);
//         this.calculateTotal();
//         return this.cart;
//       }

//       //if more than one item, decrease quantity by 1
//       this.cart[index].quantity--;
//       this.calculateTotal();
//   }

//   calculateTotal(taxRate = this.taxRate) {
//     this.total = this.cart.reduce((accumulator, item) => {
//       return accumulator + item.price * item.quantity * (taxRate + 1);
//     }, 0)
//   }
// }

// let myCart = new Cart(cart, .05);
// myCart.removeItem(3);
// console.log(myCart);

//INSTRUCTIONS
//--------------------------------------------------------------------------------
// Over a few toy problems we will be building out a class that keeps track of a
// shopping cart object that also includes a few methods to manipulate the data.

// To start you will want to make a class called Cart that includes a constructor
// function. Have the constructor function take in a single parameter that will
// be the items in the cart. Set that value equal to a value called this.cart

// Second we will want to create a method that will take in an id and then remove
// the item from the cart with the matching id, also make sure to account for if
// the id that is passed in that is not found.

// Add two new values in the constructor called this.total and this.taxRate. The constructor should take in another parameter for taxRate and store it to this.taxRate. 

//We also want to add another method that can calculate the total price of the cart. On top of this we want it to calculate the total with a variable tax rate. 

//Have the calculate total method take in a taxRate parameter.
// We also want to make it so if this function is invoked without being given a tax rate it will still work. We can use default params to set a default if one is not provided, have it default to this.taxRate if a value is not provided. 

// The constructor should calculate the total when it runs and should set the total value to this.total for the cart. We will also want this function to run during the constructor to set the initial value for total. We also want to update the total any time we remove/add/alter an item in the cart. To accomplish this you can invoke this.calculateTotal at the end of the other methods.

//Attempt November 29
let cart = [
  {
    id: 1,
    product: 'Bob Ross Paint Kit',
    price: 45.99,
    quantity: 1,
  },
  {
    id: 2,
    product: 'Paint Palette',
    price: 7.99,
    quantity: 3,
  },
  {
    id: 3,
    product: 'Paint Thinner',
    price: 15.99,
    quantity: 2,
  },
];

class Cart {
  constructor(items, taxRate) {
    this.items = items; //items in cart
    this.total;
    this.taxRate = taxRate;
    this.calculateTotal();
  }
  removeItem(id) {
    let index = this.items.findIndex(item => id === item.id);

    //first check if valid id
    if(index === -1) {
      console.log("not a valid id!")
      return "not a valid id!"
    }

    //then check if only one of the particular item is in cart. If so, remove that item completely
    if(this.items[index].quantity === 1) {
      this.items.splice(index, 1);
      this.calculateTotal();
      return this.items;
    }

    //if more than one of the item in cart, just decrease item quantity
    this.items[index].quantity--;
    this.calculateTotal();
    return;
  } 

  //calculate total with reduce function. Remember using reduce with an object requires me to set a starting value (in this case 0)
  calculateTotal(taxRate = this.taxRate) {
    let totalInCart = this.items.reduce((accumulator, item) => {
      return accumulator + item.quantity * item.price;
    }, 0)
    return totalInCart * (1 - taxRate);
  }

}

let myCart = new Cart(cart, .05);
console.log("Original cart: ", myCart);

myCart.removeItem(1);

console.log("After removing item: ", myCart);
console.log("Total: $", myCart.calculateTotal());

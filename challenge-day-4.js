// Below is some broken code. Read over all the code below, at the end you will
// see that the results are not what you would expect. Look over the code and
// try and identify where the issue is caused. You will want to console log
// oldInventory and newInventory often to see how it changes.

var oldInventory = [
    ['calico', 'tabby'],
    ['lab', 'corgi', 'rottweiler'],
    ['goldfish', 'beta', 'angel fish', 'flounder'],
  ];
  console.log("first old inventory", oldInventory);
  
  // Write a function to count the number of animals in the pet shop's old inventory
  
  function countInventory(arr) {
    var count = 0;
  
    arr.forEach(group => (count += group.length));
    return count;
  }
  console.log('countInventory:', countInventory(oldInventory));
  
  // All of the animals were very popular and were all sold in the past week
  // these same animals were ordered for the next week
  let newInventory = oldInventory.map(inventory => inventory);

  //could also do var newInventory = Object.assign([], oldInventory);
  
  // some new, exotic animals were ordered for the next week as well.
  newInventory.push(['gorilla', 'alligator', 'lion', 'humpback whale']);
  console.log("new", newInventory);
  //so... old inventory has been mutated to equal new inventory so we won't be able to compare the differences
  //to fix that I changed code assigning <let newInventory> to be a map to create a COPY

  // the pet store needs to know how many more pens they need for the new animals
  // write a new function to count the number of animals in both the old and new inventory.
  // this function should return the difference in number of animals between the old and new inventories (new - old)
  
  function compareInventory(oldArr, newArr) {
    var oldCount = 0,
        newCount = 0; //shorthand when creating multiples variables
  
    oldArr.forEach(group => (oldCount += group.length));
    console.log("old count", oldCount);
    newArr.forEach(group => (newCount += group.length));
    console.log("new count", newCount);
    var difference = newCount - oldCount
    return difference;
  }
  
  console.log('compareInventory:', compareInventory(oldInventory, newInventory));
  // Were not getting the correct result here. we should get the amount of new animals
  // that were added but instead were getting 0 new ones added. Looking over the code
  // above try and figure out where the issue happens. You should try console.loging
  // every line to make sure you really understand what is going on.
  
  // when you find what is going on try and look online to see what is going on. Your mentor
  // will go over what exactly is happening.

//by Assignment: if he reassigns value (string, num), it will do an
//assignment by value. There will be 2 versions. 


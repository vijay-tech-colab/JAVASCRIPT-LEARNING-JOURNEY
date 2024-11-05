class Counter {
    // Static property to keep track of the count
    static count = 0;
  
    // Static method to increment the count
    static increment() {
      this.count++; // Counter.count++ we can do 
    }
  
    // Static method to get the current count
    static getCount() {
      return Counter.count;
    }
  }
  
  // Using the static methods and property without creating an instance
  Counter.increment();
  Counter.increment();
  console.log(Counter.getCount()); // Output: 2
  
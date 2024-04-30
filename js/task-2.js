function Storage(initialItems) {
    this.items = initialItems;
  
    this.getItems = function() {
      return this.items;
    };
  
    this.addItem = function(newItem) {
      this.items.push(newItem);
    };
  
    this.removeItem = function(itemToRemove) {
      this.items = this.items.filter(function(item) {
        return item !== itemToRemove;
      });
    };
  }
  
  const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
  console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
  
  storage.addItem("Droid");
  console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
  
  storage.removeItem("Prolonger");
  console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
  
  storage.removeItem("Scaner");
  console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
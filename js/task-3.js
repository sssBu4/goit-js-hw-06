function StringBuilder(initialValue) {
    this.value = initialValue;
  
    this.getValue = function() {
      return this.value;
    };
  
    this.padEnd = function(str) {
      this.value += str;
    };
  
    this.padStart = function(str) {
      this.value = str + this.value;
    };
  
    this.padBoth = function(str) {
      this.value = str + this.value + str;
    };
  }
  
  const builder = new StringBuilder(".");
  console.log(builder.getValue()); // "."
  builder.padStart("^");
  console.log(builder.getValue()); // "^."
  builder.padEnd("^");
  console.log(builder.getValue()); // "^.^"
  builder.padBoth("=");
  console.log(builder.getValue()); // "=^.^="
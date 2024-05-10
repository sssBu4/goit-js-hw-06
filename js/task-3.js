function StringBuilder(initialValue) {
  let value = initialValue;

  this.getValue = function() {
    return value;
  };

  this.padEnd = function(str) {
    value += str;
  };

  this.padStart = function(str) {
    value = str + value;
  };

  this.padBoth = function(str) {
    value = str + value + str;
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
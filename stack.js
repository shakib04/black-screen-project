// implement stack in javascript
function Stack() {
    this.data = [];
}

Stack.prototype.push = function(item) {
    this.data.push(item);
}

Stack.prototype.pop = function() {
    return this.data.pop();
}

Stack.prototype.peek = function() {
    return this.data[this.data.length - 1];
}

Stack.prototype.isEmpty = function() {
    return this.data.length === 0;
}

Stack.prototype.size = function() {
    return this.data.length;
}

Stack.prototype.clear = function() {
    this.data = [];
}

Stack.prototype.print = function() {
    console.log(this.data.toString());
}
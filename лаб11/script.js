let animal = {
  jumps: null
};

let rabbit = {
  __proto__: animal,
  jumps: true
};

console.log(rabbit.jumps);

delete rabbit.jumps;

console.log(rabbit.jumps);

delete animal.jumps;

console.log(rabbit.jumps);

let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000,
  __proto__: bed
};

console.log(pockets.pen); 
console.log(head.glasses);

let animal2 = {
  eat() {
    this.full = true;
  }
};

let rabbit2 = {
  __proto__: animal2
};

rabbit2.eat();

console.log(rabbit2.full);

let hamster2 = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy2 = {
  __proto__: hamster2
};

let lazy2 = {
  __proto__: hamster2
};

speedy2.eat("apple");
console.log(speedy2.stomach);

console.log(lazy2.stomach); 

lazy2.eat("orange");
console.log(lazy2.stomach); 

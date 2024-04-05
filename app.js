var PI = 3.14;
console.log(PI);

PI = 42;
console.log(PI);

function pies() {
    var PI = 3.14;
    console.log(PI);
};
console.log(pies());

// With Var, you can always reassign and redeclare the variables. I wrote a function to place the variables inside, but it can still be reassigned and redeclared outside of the function.

function yum() {
    let PI = 3.14;
    console.log(PI);
};
console.log(yum());

// What is the difference between var and let? - Var can reassign and redeclare variables. Let can only reassign a variable. Let can also make use of block scopes.

// What is the difference between var and const? - Const makes it so you cannot redeclare or reassign a variable. It also works in a block space.

// What is the difference between let and const? - You can reassign with let, but cannot reassign or redeclare with const.

// What is hoisting? - When you define variables with var, you can create variables in functions and they are able to be referenced before they are actually defined. This is because when using var, the variables are "hoisted" to the top of the page where they are kept note of.


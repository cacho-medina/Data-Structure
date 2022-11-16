//IMPLEMENTACION DE PILA (STACK)

//(1) USANDO ARRAYS

/* -------------------------CLASES PARA CREAR OBJETOS---------------------------------- */
/*
class Stack {
    constructor() {
        this.stack = [];
    }
    push(element) {
        this.stack.push(element);
        return this.stack;
    }
    pop() {
        this.stack.pop();
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }
    size() {
        return this.stack.length;
    }
    print() {
        console.log(this.stack);
    }
}
*/
/* -------------------------FUNCIONES PARA CREAR OBJETOS---------------------------------- */
/*
function Stack() {
    this.stack = [];
}
Stack.prototype.push = function (element) {
    this.stack.push(element);
    return this.stack;
};
Stack.prototype.pop = function () {
    return this.stack.pop();
};
Stack.prototype.peek = function () {
    return this.stack[this.stack.length - 1];
};
Stack.prototype.size = function () {
    return this.stack.length;
};
Stack.prototype.print = function () {
    console.log(this.stack);
};

const pila = new Stack();
console.log(pila.size());
console.log(pila.push("Cacho"));
console.log(pila.push("yella"));
console.log(pila.size());
pila.print();
console.log(pila.pop());
console.log(pila.peek());
pila.print();
*/

//(2) USANDO OBJETOS

class Stack {
    constructor() {
        this.stack = {};
        this.count = 0;
    }
    push(element) {
        this.stack[this.count] = element;
        this.count++;
        return this.stack;
    }
    pop() {
        this.count--;
        const element = this.stack[this.count];
        delete this.stack[this.count];
        return element;
    }
    peek() {
        return this.stack[this.count - 1];
    }
    size() {
        return this.count;
    }
    print() {
        console.log(this.stack);
    }
}

const pila = new Stack();
console.log(pila.size());
console.log(pila.push("Cacho"));
console.log(pila.push("yella"));
console.log(pila.size());
pila.print();
console.log(pila.pop());
console.log(pila.peek());
pila.print();

/* ---------------------------------------------------------------- */

//IMPLEMENTACION DE QUEUE (COLA)

//(1) USANDO ARRAYS

function Queue() {
    this.queue = [];
}

Queue.prototype.enqueue = function (element) {
    this.queue.push(element);
    return this.queue;
};
Queue.prototype.dequeue = function () {
    return this.queue.shift();
};
Queue.prototype.peek = function () {
    return this.queue[0];
};
Queue.prototype.size = function () {
    return this.queue.length;
};
Queue.prototype.print = function () {
    return this.queue;
};
Queue.prototype.isEmpty = function () {
    return this.queue.length === 0;
};

const cola = new Queue();
console.log(cola.print());
cola.enqueue("Cacho");
cola.enqueue("Juli");
cola.enqueue("22");
console.log(cola.print());
console.log(cola.size());
console.log(cola.isEmpty());
console.log(cola.peek());
cola.dequeue();
console.log(cola.print());

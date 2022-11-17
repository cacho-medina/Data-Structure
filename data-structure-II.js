//LISTAS ENLAZADAS

//LISTAS SIMPLES, DOBLES Y CIRCULARES

//creacion de lista y nodo
function Node(data) {
    this.data = data;
    this.next = null;
}

function List() {
    this._length = 0; //propiedad privada (no puede ser modificada desde afuera de la clase)
    this.head = null;
}

//implementacion de funciones a la lista

List.prototype.insertNode = function (data) {
    var node = new Node(data);
    var current = this.head; //referencia al primer nodo de la lista
    //si esta vacia
    if (!current) {
        this.head = node;
        this._length++;
        return node;
    }
    //si no esta vacia, recorro hasta encontrar el ultimo nodo
    while (current.next) {
        current = current.next;
    }
    current.next = node;
    this._length++;
    return node;
};

List.prototype.print = function () {
    var current = this.head;
    if (!current) {
        console.log("La lista esta vacia");
        return;
    }
    while (current) {
        console.log(current.data); //muestra la data de cada nodo
        current = current.next;
    }
    return;
};

List.prototype.findNode = function (value) {
    let current = this.head;
    while (current) {
        if (current.data == value) {
            return current;
        }
        current = current.next;
    }
    return null; //en caso de no encontrar ningun valor retorna null
};

List.prototype.deleteNode = function (value) {
    if (this.head.data == value) {
        this.head = this.head.next;
    } else {
        let current = this.head;
        while (current.next) {
            if (current.next.data == value) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }
};

const list = new List();
list.insertNode(22);
list.insertNode(2);
list.insertNode(10);
list.print();
console.log(list.findNode(2));
list.deleteNode(22);
list.print();

/* ---------------------------------------------------------------------- */

//HASH TABLE

//USANDO MAP

const hashTable = new Map();

hashTable.set("name", "Cacho");
hashTable.set("surname", "Medina");
hashTable.set("edad", "22");

console.log(hashTable.get("name"));
console.log(hashTable.get("surname"));
console.log(hashTable.size);

for (const [key, value] of hashTable) {
    console.log(`${key} = ${value}\n`);
}

//USANDO CLASES

function tablaHash() {
    this.tabla = [];
    this.tamaño = 0;
}

tablaHash.prototype.set = function (key, value) {
    const indice = this._hash(key);
    this.tabla[indice] = [key, value];
    this.tamaño++;
};

tablaHash.prototype.get = function (key) {
    const indice = this._hash(key);
    return this.tabla[indice];
};

tablaHash.prototype.remove = function (key) {
    const indice = this._hash(key);
    if (this.tabla[indice] && this.tabla[indice].length > 0) {
        this.tabla[indice] = undefined;
        this.tamaño--;
        return true;
    } else {
        return false;
    }
};

//el metodo _hash() es un metodo privado
tablaHash.prototype._hash = function (key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
    }
    return hash % this.tabla.length;
};

const ht = new tablaHash();
ht.set("name", "Cacho");
ht.set("surname", "Medina");
ht.set("age", 2);
console.log(ht.get("name"));
console.log(ht.get("surname"));
console.log(ht.get("age"));
console.log(ht.remove("surname"));
console.log(ht.get("surname"));
ht.remove("age");
console.log(ht.get("age"));

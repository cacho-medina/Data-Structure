//LISTAS ENLAZADAS

//LISTAS SIMPLES, DOBLES Y MULTIPLES

//creacion de lista y nodo
function Node(data) {
    this.data = data;
    this.next = null;
}

function List() {
    this._length = 0; //propiedad privada (no puede ser modificada desde afuera de la clase)
    this.head = null;
}

//implementacion de la funcion insertar nodo al final

List.prototype.add = function (data) {
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
list.add(22);
list.add(2);
list.add(10);
list.print();
console.log(list.findNode(2));
list.deleteNode(22);
list.print();

//IMPLEMENTACION DE ARBOLES BINARIOS

//NODO DEL ARBOL
function binaryTreeNode(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

binaryTreeNode.prototype.insert = function (value) {
    if (value < this.value) {
        if (!this.left) {
            this.left = new binaryTreeNode(value);
            return value;
        } else {
            this.left.insert(value); //se aplica la funcion insert si el nodo de la izquierda esta ocupado
        }
    } else {
        if (!this.right) {
            this.right = new binaryTreeNode(value);
            return value;
        } else {
            this.right.insert(value); //se aplica la funcion insert si el nodo de la izquierda esta ocupado
        }
    }
};

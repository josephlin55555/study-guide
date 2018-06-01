class Node {
    constructor(value) {
        this.value = value;
    }
}

class BinarySearchTree {
    constructor(root) {
        this.root = root;
    }

    search(value, node = this.root) {
        if (!node || node.value === value) {
            return node;
        } else if (value < node.value) {
            this.search(value, node.left);
        } else if (value > node.value) {
            this.search(value, node.right);
        }
    }

    insert(value, node = this.root) {
        if (!node) {
            node = new Node(value);
        } else if (value < node.value) {
            this.insert(value, node.left);
        } else if (value > node.value) {
            this.insert(value, node.right);
        }
    }

    delete() {

    }

}
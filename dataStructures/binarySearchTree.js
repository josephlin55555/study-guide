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

    insert(value, node = this.root, parentNode) {
        if (!node) {
            node = new Node(value);
            node.parent = parentNode;
        } else if (value < node.value) {
            this.insert(value, node.left, node);
        } else if (value > node.value) {
            this.insert(value, node.right, node);
        }
    }

    findMinimumNode(node = this.root) {
        return !node.left ? node : this.findMinimumNode(node.left);
    }

    delete(value, node = this.root) {
        if (node === null) {
            return null;
        } else if (value < node.value) {
            node.left = this.delete(value, node.left);
            return node;
        } else if (value > node.value) {
            node.right = this.delete(value, node.right);
            return node;
        } else {
            // no children
            if (!node.left && !node.right) {
                node = null;
                return node;
            }

            // one child
            if (!node.left) {
                node = node.right;
                return node;
            } else if (!node.right) {
                node = node.left;
                return node;
            }

            // two children
            const temporaryNode = this.findMinimumNode(node.right);
            node.value = temporaryNode.value;
            node.right = this.delete(temporaryNode.value, node.right);
            return node;
        }
    }
}



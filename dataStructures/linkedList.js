class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    add(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = newNode;
        }

        this.length++;
        return newNode;
    }

    search(index) {
        let current = this.head,
            count = 0;

        if (index >= this.length || index < 0) {
            return null;
        }

        while (count < index) {
            current = current.next;
            count++;
        }

        return current;
    }

    remove(index) {
        let current = this.head,
            previous = null,
            count = 0;

        if (index >= length || index < 0) {
            return null;
        } else if (index === 0) {
            this.head = this.head.next;
            this.length--;

            // whatever happens, return back the head of the list
            return this.head;
        } else {
            while (count < index) {
                previous = current;
                current = current.next;
                count++;
            }

            previous.next = current.next;
            this.length--;

            // remove current from memory
            current = null;

            // whatever happens, return back the head of the list
            return this.head;
        }
    }
}

class doubleLinkedList {
    constructor() {

    }
}
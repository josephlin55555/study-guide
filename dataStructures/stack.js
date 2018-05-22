class Stack {
    constructor() {
        this.size = 0;
        this.storage = {};
    }

    push(value) {
        this.storage[this.size] = value;
        this.size++;
    }

    pop() {
        const index = this.size - 1;
        const value = this.storage[index] || null;

        if (this.size > 0) {
            delete this.storage[index];
            this.size--;
        }

        return value;
    }

    peek() {
        return this.storage[this.size] || null;
    }

    isEmpty() {
        return this.size === 0;
    }
}

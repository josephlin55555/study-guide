class Stack {
    constructor() {
        this.size = 0;
        this.storage = {};
    }

    push(value) {
        this.size++;
        this.storage[this.size] = value;
    }

    pop() {
        const value = this.storage[this.size] || null;

        if (this.size > 0) {
            delete this.storage[this.size];
            this.size--;
        }

        return value;
    }

    peek() {
        return this.storage[this.size];
    }

    isEmpty() {
        return this.size === 0;
    }
}

class Queue {
    constructor() {
        this.storage = {};
        this.frontIndex = 0;
        this.endIndex = 0;
    }

    enqueue(value) {
        this.storage[this.endIndex] = value;
        this.endIndex++;
    }

    dequeue() {
        const frontElement = this.storage[this.frontIndex] || null;

        if (this.frontIndex !== this.endIndex) {
            delete this.storage[this.frontIndex];
            this.frontIndex++;
        }

        return frontElement;
    }

    peek() {
        return this.storage[this.frontIndex] || null;
    }

    isEmpty() {
        return this.frontIndex === this.endIndex;
    }
}

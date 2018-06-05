class Array {
    constructor() {
        this.storage = [];
    }

    add(value) {
        this.storage.push(value);
    }

    remove(value) {
        this.storage = this.storage.filter(element => element !== value);
    }

    search(value) {
        const index = this.storage.indexOf(value);
        return index > -1 ? index : null;
    }
}
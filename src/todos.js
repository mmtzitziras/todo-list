export default class TodoItem {
    static #id = 0;

    static #incrementID() {
        this.#id++; 
    }
    constructor(title, description, dueDate, priority) {
        TodoItem.#incrementID();
        this.id = TodoItem.#id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }

}
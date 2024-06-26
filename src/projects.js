import TodoItem from "./todos";

const allProjects = [];
export default class Project {
    constructor(title) {
        this.title = title;
        this.todoItems = [];
        allProjects.push(this);
    }

    addTodoItem(todoItem) {
        if (todoItem instanceof TodoItem) {
            this.todoItems.push(todoItem);
        } else {
            console.error("Argument must be an instance of TodoItem");
        }
    }

    removeTodoItem(index) {
        if (index > -1 && index < this.todoItems.length) {
            this.todoItems.splice(index, 1);
        } else {
            console.error("Invalid index");
        }
    }

    forEachTodo(callback) {
        this.todoItems.forEach(callback);
    }

    getTodoItems() {
        return this.todoItems;
    }

    getTitle(){
        return this.title;
    }
}
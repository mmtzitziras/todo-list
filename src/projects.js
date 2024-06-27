import TodoItem from "./todos";

const allProjects = [];
let currentProject;

export default class Project {
    
    static #id = 0;

    static #incrementID() {
        this.#id++; 
    }

    constructor(title) {
        
        Project.#incrementID();
        this.id = Project.#id;
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

    removeTodoItemById(todoId) {
        this.todoItems = this.todoItems.filter(todo => todo.id !== todoId);
    }

    static getProjectById(projectId){
        return allProjects.find(project => project.id === projectId);
    }

    getTodoItems() {
        return this.todoItems;
    }

    getTitle(){
        return this.title;
    }

    static getAllProjects(){
        return allProjects;
    }

    static setCurrentProject(projectId){
        currentProject = this.getProjectById(projectId);
    }

    static getCurrentProject(){
        return currentProject;
    }
}
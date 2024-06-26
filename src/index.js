import './styles.css';
import TodoItem from './todos';
import Project from './projects';

let currentProject;
const page = document.querySelector('body');
const defaultProject = new Project('default project');
currentProject = defaultProject;
const defaultTodo = new TodoItem('default', 'just a default todo', new Date(1999, 1, 16).toISOString().split('T')[0].replace(/-/g, ' '), 3); 
const defaultTodo1 = new TodoItem('default', 'just a default todo1', new Date(1999, 2, 15).toISOString().split('T')[0].replace(/-/g, ' '), 3); 
defaultProject.addTodoItem(defaultTodo);
defaultProject.addTodoItem(defaultTodo1);
const newProject = document.createElement('div');
newProject.classList.add('project-view');
newProject.textContent = (defaultProject.getTitle());
const allProjects = document.querySelector('.all-projects-view');
const currentTodos = document.querySelector('.current-todos-view');
allProjects.appendChild(newProject);


function ShowTodos(currentProject){
    currentProject.forEachTodo(todo => {
        const newTodo = document.createElement('div');
        newTodo.classList.add('todo')
        newTodo.textContent = (`${todo.title}, ${todo.description}, ${todo.dueDate}, ${todo.priority}`);
        currentTodos.appendChild(newTodo);  
    });
}

ShowTodos(currentProject);

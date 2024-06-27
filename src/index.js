import './styles.css';
import TodoItem from './todos';
import Project from './projects';
import { RenderProjects, RenderTodos } from './renderer';


const page = document.querySelector('body');

export function onProjectClick(project) {
    currentProject = project;
    const currentTodos = document.querySelector('.current-todos-view-items');
    RenderTodos(currentTodos, currentProject);
}
function pageLoad(){

    const allProjectsView = document.querySelector('.all-projects-view-items');
    const currentTodos = document.querySelector('.current-todos-view-items');

    const project1 = new Project("Project 1");
    const todo1 = new TodoItem("Task 1", "Description 1", "2023-07-01", "High");
    const todo2 = new TodoItem("Task 2", "Description 2", "2023-07-02", "Medium");
    project1.addTodoItem(todo1);
    project1.addTodoItem(todo2);

    const project2 = new Project("Project 2");
    const todo3 = new TodoItem("Task 3", "Description 3", "2023-07-03", "Low");
    project2.addTodoItem(todo3);

    Project.setCurrentProject(1);
    
    RenderProjects(allProjectsView);
    RenderTodos(currentTodos);


}

pageLoad();





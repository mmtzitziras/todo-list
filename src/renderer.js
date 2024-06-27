import Project from './projects';
import { onProjectClick } from '.';


export function RenderTodos(currentTodos){
    const currentProject = Project.getCurrentProject();
    currentProject.forEachTodo(todo => {

        const newTodo = document.createElement('div');
        newTodo.classList.add('todo');
        newTodo.innerHTML = `<input type="checkbox" id="${todo.id}" name="done" unchecked />
                            <div class='todo-title'>${todo.title}</div>
                            <button class="delete-todo-button" data-id="${todo.id}">X</button>`;
        currentTodos.appendChild(newTodo); 
        
        const deleteButton = newTodo.querySelector('.delete-todo-button');
            deleteButton.addEventListener('click', (event) => {
                const todoId = parseInt(event.target.getAttribute('data-id'));
                currentProject.removeTodoItemById(todoId);
                currentTodos.removeChild(newTodo);
                currentTodos.replaceChildren();
                RenderTodos(currentTodos); 
            });
    });
}

export function RenderProjects(allProjectsView){
    Project.getAllProjects().forEach(project => {
        const newProject = document.createElement('button');
        newProject.classList.add('project');
        newProject.setAttribute('data-id', project.id);
        newProject.textContent = (project.getTitle());
        allProjectsView.appendChild(newProject);
        newProject.addEventListener('dblclick', (event) => {
            allProjectsView.removeChild(newProject);
            
        });
        newProject.addEventListener('click', (event) => {
            const projectId = parseInt(event.target.getAttribute('data-id'));
            Project.setCurrentProject(projectId);
            const currentTodos = document.querySelector('.current-todos-view-items');
            currentTodos.innerHTML = '';
            RenderTodos(currentTodos);
        });
    })
}

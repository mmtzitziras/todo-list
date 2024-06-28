import Project from './projects';
import TodoItem from './todos';
import { onProjectClick } from '.';


export function RenderTodos(currentTodos){
    const currentProject = Project.getCurrentProject();
    currentProject.forEachTodo(todo => {

        const newTodo = document.createElement('div');
        const completed = todo.getComplete() ? 'checked' : 'unchecked';
        
        newTodo.classList.add('todo');
        newTodo.innerHTML = `<input class="todo-checkbox" type="checkbox" id="${todo.id}" name="done" ${completed} />
                            <div class='todo-title'>${todo.title}</div>
                            <button class="delete-todo-button" data-id="${todo.id}">X</button>`;
        
        if(todo.getComplete()){
            newTodo.querySelector('.todo-title').style.textDecorationLine = "line-through";
        }
        else{
            newTodo.querySelector('.todo-title').style.textDecorationLine = null;
        }
        currentTodos.appendChild(newTodo); 
        
        const checkboxButton = newTodo.querySelector('.todo-checkbox');
        checkboxButton.addEventListener('click', (event) => {
            if (event.target.checked){
                newTodo.querySelector('.todo-title').style.textDecorationLine = "line-through";
                todo.toggleCompleted();
            }
            else{
                newTodo.querySelector('.todo-title').style.textDecorationLine = null;
                todo.toggleCompleted();
            }
        })
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

            // if(document.querySelector('.selected-project') !== null){
            //     const lastProject = document.querySelectorAll('.selected-project');
            //     console.log(lastProject);
            //     lastProject.classList.remove('.selected-project');
            // }
            
            const projectId = parseInt(event.target.getAttribute('data-id'));
            // event.target.classList.add("selected-project");

            Project.setCurrentProject(projectId);
            const currentTodos = document.querySelector('.current-todos-view-items');
            currentTodos.innerHTML = '';
            RenderTodos(currentTodos);
        });
    })
}

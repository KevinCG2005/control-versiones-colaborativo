// Obtener elementos del DOM
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Función para agregar tarea
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Por favor escribe una tarea');
        return;
    }
    
    // Crear elemento de lista
    const li = document.createElement('li');
    li.className = 'task-item';
    
    // Crear texto de tarea
    const span = document.createElement('span');
    span.textContent = taskText;
    
    // Crear botón de eliminar
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
        li.remove();
    };
    
    // Agregar elementos al li
    li.appendChild(span);
    li.appendChild(deleteBtn);
    
    // Agregar li a la lista
    taskList.appendChild(li);
    
    // Limpiar input
    taskInput.value = '';
}

// Event listener para el botón
addBtn.addEventListener('click', addTask);

// Event listener para Enter
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
```

5. **Baja con scroll y en "Commit message" escribe:**
```
   feat: agregar funcionalidad JavaScript para tareas
```

6. **Selecciona:** "Create a new branch"

7. **Nombre de la rama:**
```
   feature/funcionalidad-js

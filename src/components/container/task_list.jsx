import React, {useState, useEffect} from 'react';
import { Levels } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {
    
    const defaultTask = new Task('Ejemplo', 'Descripcion de ejemplo', false, Levels.normal)
    
    const [tasks, setTasks] = useState(defaultTask);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      console.log("Tarea modificada");
      setLoading(false);
        
      return () => {
        console.log("Tarea va a desaparecer");
      }
    }, [tasks])
    

    const changeCompleted = (id) => {
        console.log('Cambiar estado de tarea')
    }

    return (
        <div>
            <div>
                <h1>Tu taréa:</h1>
            </div>
            {/* TODO: Aplicar un for/map para renderizar una lista */}
            <TaskComponent task={defaultTask}/>
        </div>
    );
}

export default TaskListComponent;
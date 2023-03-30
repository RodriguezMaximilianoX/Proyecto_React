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
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>
                            Tus taréas
                        </h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Título</th>
                                    <th scope='col'>Descripcíon</th>
                                    <th scope='col'>Prioridad</th>
                                    <th scope='col'>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                            <TaskComponent task={defaultTask}/>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* TODO: Aplicar un for/map para renderizar una lista */}
        </div>
    );
}

export default TaskListComponent;
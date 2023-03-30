import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
 
 
 const TaskComponent = ({task}) => {

    useEffect(() => {
        console.log("Tarea creada ")
        return () => {
            console.log(`Tarea ${task.name} va a desaparecer`)
        };
    }, [task]);

    return (
        <div>
            <h2>
                Nombre: {task.name}
            </h2>
            <h3>
                Descripción: {task.description}
            </h3>
            <h4>
                Nivel: {task.levels}
            </h4>
            <h5>
                Estado de taréa: {task.completed ? 'Completada' : 'Pendiente'}
            </h5>
        </div>
    );
 };
 
 
 TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
 };
 
 
 export default TaskComponent;
 
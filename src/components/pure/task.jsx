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
        <tr className='fw-normal'>
            <th>
                <span className='ms-s'>{task.name}</span>
            </th>
            <td className='align-midle'>
                <span className='ms-s'>{task.description}</span>
            </td>
            <td className='align-midle'>
                <span>{task.level}</span>
            </td>
            <td className='align-midle'>
                <span>{task.completed}</span>
            </td>
        </tr>
    );
 };
 
 
 TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
 };
 
 
 export default TaskComponent;
 
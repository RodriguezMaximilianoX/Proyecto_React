import { Levels } from "./levels.enum";

export class Task {
    name = '';
    description = '';
    completed = false;
    level = 'Urgente';
    levels = Levels.normal;

    constructor(name,description, completed, levels){
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.levels = levels;
    }

}
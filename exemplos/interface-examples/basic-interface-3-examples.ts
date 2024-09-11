interface Task {
    title: string;
    completed?: boolean;
}

    function taskStatus (task: Task) {
        if(task.completed == null) {
            return `Tarefa não concluida:${task.title} `
        }

        return `Tarefa concluida: ${task.title}`;
    }

    const task1:Task = {title:"Fazer API", completed:true};
    const task2:Task = {title:"Fazer BOT"};

    //caso tarefa seja concluida:
    console.log(taskStatus(task1));
    //caso não seja:
    console.log(taskStatus(task2));
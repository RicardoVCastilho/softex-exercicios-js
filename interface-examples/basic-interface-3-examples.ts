interface Task {
    title: string;
    completed?: boolean;
}

    function taskStatus (task: Task) {
        if(task.completed) {
            return `Parabéns, concluiu a tarefa!`
        }
        else{
            return `Tarefa incompleta!` 
        };
    }

    const task1:Task = {title:"Task1", completed:true};
    const task2:Task = {title:"Task2"}

    //caso tarefa seja concluida:
    console.log(taskStatus(task1));
    //caso não seja:
    console.log(taskStatus(task2));
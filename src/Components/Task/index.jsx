import styles from "./task.module.css";
import Clipboard from "../../assets/Clipboard.png";
import { useContext, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { taskContext } from "../../Context";

const Task = () => {
    const { taskDecription, setTaskDescription } = useContext(taskContext);
    const [taskConcludes, setTaskConclude] = useState(0);
    const [taskCompletion, setTaskCompletion] = useState(Array(taskDecription.length).fill(false));

    const toggleTaskCompletion = (index) => {
        const updatedCompletion = [...taskCompletion]
        updatedCompletion[index] = !updatedCompletion[index]
        setTaskCompletion(updatedCompletion)
        setTaskConclude((tasks) => tasks + (updatedCompletion[index] ? 1 : -1))
    }
    
    const tasksCreateCount = taskDecription.length

    const deleteTask = (index) => {
        const updatedTasks = [...taskDecription]
        updatedTasks.splice(index, 1)
        setTaskDescription(updatedTasks)
    }

    return (
        <div className={styles.task}>
            <div className={styles.info}>
                <p className={styles.taskCreate}>Tarefas criadas <span>{tasksCreateCount}</span></p>
                <p className={styles.taskConcludes}>Concluídas <span>{taskConcludes} de {tasksCreateCount}</span></p>
            </div>
            {!(taskDecription.length > 0) && (
                <div className={styles.content}>
                    <img src={Clipboard} />
                    <strong>
                        <p>Você ainda não tem tarefas cadastradas</p>
                        <span>Crie tarefas e organize seus itens a fazer</span>
                    </strong>
                </div>
            )}
            {taskDecription.map((description, index) => (
                <div className={styles.list} key={index}>
                    <div className={styles.checkbox}>
                        <input
                            className={styles.radius}
                            type="checkbox"
                            onClick={() => toggleTaskCompletion(index)}
                            checked={taskCompletion[index]}
                        />
                        <span className={styles.checked}></span>
                    </div>
                    <div style={taskCompletion[index] ? { textDecoration: 'line-through', color: '#808080' } : { color: '#F2F2F2' }} className={styles.descriptionTask}>
                        <p>{description}</p>
                    </div>
                    <div className={styles.icon}>
                        <FaRegTrashAlt size={15} onClick={() => deleteTask(index)} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Task;

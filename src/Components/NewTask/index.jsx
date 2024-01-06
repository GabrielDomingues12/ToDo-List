import { useState, useContext } from "react";
import styles from "./newTask.module.css"
import { IoIosAddCircleOutline } from "react-icons/io";
import { taskContext } from "../../Context";

const NewTask = () => {
    const [inputPlaceholder, setInputPlaceholder] = useState('Adicione uma nova tarefa');
    const [description, setDescription] = useState('');
    const { setTaskDescription } = useContext(taskContext);

    const handleOnFocus = () => {
        setInputPlaceholder("Descrição da tarefa |")
    }
    const handleOnBlur = () => {
        setInputPlaceholder('Adicione uma nova tarefa')
    }

    const handleCreateTask = (e) => {
        e.preventDefault()
        setDescription('')
        setTaskDescription((state) => [...state, description])
    }

    return (
        <form onSubmit={handleCreateTask}>
            <div className={styles.newTask}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder={inputPlaceholder}
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />
                {(description.length <= 0) ?
                    <button className={styles.button} type="submit" disabled>
                        Criar <IoIosAddCircleOutline size={20} />
                    </button>
                    :
                    <button className={styles.button} type="submit">
                        Criar <IoIosAddCircleOutline size={20} />
                    </button>}
            </div >
        </form>
    )
}

export default NewTask
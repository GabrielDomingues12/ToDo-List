import { useState } from "react";
import styles from "./newTask.module.css"
import { IoIosAddCircleOutline } from "react-icons/io";

const NewTask = () => {
    const [inputPlaceholder, setInputPlaceholder] = useState('Adicione uma nova tarefa')
    const handleOnFocus = () => {
        setInputPlaceholder("Descrição da tarefa |")
    }
    const handleOnBlur = () => {
        setInputPlaceholder('Adicione uma nova tarefa')
    }
    return (
        <div className={styles.newTask}>
            <input
                id="inputId"
                type="text"
                className={styles.input}
                placeholder={inputPlaceholder}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
            />
            <button className={styles.button} type="submit">
                Criar <IoIosAddCircleOutline size={20} />
            </button>
        </div>
    )
}

export default NewTask
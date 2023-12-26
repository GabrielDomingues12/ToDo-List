import styles from "./task.module.css"
import Clipbaord from "../../assets/Clipboard.png"
import { useState } from "react"
import { FaRegTrashAlt } from "react-icons/fa";

const Task = () => {
    const [listEmpty] = useState(false)
    return (
        <div className={styles.task}>
            <div className={styles.info}>
                <p className={styles.taskCreate}>Tarefas criadas <span>0</span></p>
                <p className={styles.taskConcludes}>Concluidas <span>0</span></p>
            </div>
            {!(listEmpty === false) &&
                <div className={styles.content}>
                    <img src={Clipbaord} alt="" />
                    <strong>
                        <p>Você ainda não tem tarefas cadastradas</p>
                        <span>Crie tarefas e organize seus itens a fazer</span>
                    </strong>
                </div>}
            <div className={styles.list}>
                <div className={styles.checkbox}>
                    <input className={styles.radius} type="checkbox" />
                    <span className={styles.checked}></span>
                </div>
                <div className={styles.descriptionTask}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio harum eos dicta impedit expedita unde ut. Quaerat, praesentium quidem necessitatibus culpa illum id quod earum laboriosam, pariatur numquam deserunt saepe!x
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aliquam nihil consequuntur nostrum aperiam magni ratione dignissimos? Culpa atque delectus, voluptatem ullam optio dicta error pariatur laudantium eligendi nesciunt provident.
                </div>
                <div className={styles.icon}>
                    <FaRegTrashAlt size={15} />
                </div>
            </div>
        </div>
    )
}

export default Task
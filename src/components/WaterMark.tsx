import styles from "styles/WaterMark.module.scss";
const Watermark = () => {
    return <div className={styles.watermark}>
        {/*<h3>Оценка по компетенциям</h3>*/}
        <p className={styles.text}>– это оценка личных и деловых качеств сотрудника, знаний, умений и навыков, которые необходимы для эффективного выполнения работы и достижения высоких результатов. Пожалуйста, заполните оценку по компетенциям на основании примеров поведения сотрудника за оцениваемый период.</p>
    </div>
}

export default Watermark;
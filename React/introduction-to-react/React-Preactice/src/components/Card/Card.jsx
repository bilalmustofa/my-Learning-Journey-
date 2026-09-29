import styles from './Card.module.css';
import { cardsData } from '../Card/data.js'

function Card() {
    console.log(cardsData[1].bgClass)
  return (
    <>
        <section style={{backgroundColor: '#ffffcc'}}>
          <h1 className={styles.heading}>Towns Card</h1>
         <div className={styles.container}>
          {cardsData.map((cardData) => (
            <div key={cardData.id} className={`${styles.card}`}>
              <img src={cardData.image} alt="" className={styles.image}/>
              <p className={styles.title}>{cardData.title}</p>
            </div>
          ))}
         </div>
        </section>
    </>
  )
}

export default Card;
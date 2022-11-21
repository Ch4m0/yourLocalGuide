import styles from  './guide.module.scss'
import { Rating } from './rating/rating';

export default function Guide({id}) {

  console.log(styles)
  return (
    <div  className={`${styles.guide}`}>
      <div className="guideHeader">
        <img  src= {"https://i.pravatar.cc/"+id} alt="" />
        <span> Juan Roman</span>
        <Rating></Rating>
      </div>

      <div className="card-content">
        <span>#Sightseeing, #Culture, #Bird Watching, #Climbing, #Nature</span>
        <p>Tour Guide in Spanish, English, German in Santa Marta, Cartagena, La Sierra Nevada de Santa Marta, ...</p>
      </div>
    </div>
  
  );
}

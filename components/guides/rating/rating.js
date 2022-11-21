import { MdStarRate} from "react-icons/md";
import styles from './rating.module.scss'

export const Rating = () => {
  return (
    <div className={styles.rating}>
    <MdStarRate />
    <MdStarRate />
    <MdStarRate />
    <MdStarRate />
    <MdStarRate />
    </div>
  )
}

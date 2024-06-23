import css from './Description.module.css';
import { SiCoffeescript } from "react-icons/si";

export default function Description() {
    return (
        <div>
            <h1 className={css.title}>Sip Happens Café <SiCoffeescript className={css.icon}/></h1>
            <p className={css.text}>Please leave your feedback about our service by selecting one of the options below.
            </p>
          </div>
    )
}

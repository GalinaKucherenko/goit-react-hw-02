import css from "./Feedback.module.css";
import { CiFaceSmile } from "react-icons/ci";
import { PiSmileyMehLight } from "react-icons/pi";
import { PiSmileySadLight } from "react-icons/pi";

export default function Feedback({ feedback, totalFeedback, positiveFeedback }) {
    return (
    <div className={css.container}>
      <p className={css.text}>Good: {feedback.good}<CiFaceSmile className={css.icon}/></p>
      <p className={css.text}>Neutral: {feedback.neutral}<PiSmileyMehLight className={css.icon}/></p>
      <p className={css.text}>Bad: {feedback.bad}<PiSmileySadLight className={css.icon}/></p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}%</p>
    </div>
  );
}

import FeedbackItems from "../FeedbackItems"
function Card({children, reverse}) {
  return (
    <div className={`cardItems ${reverse && 'reverse'}`}>{children}</div>

  )
}

export default Card
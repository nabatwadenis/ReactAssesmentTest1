
function FeedbackItems({item}) {
  return (
    <div className="cardItems">
      <div className="ratings">{item.rating}</div>
      <div className="card-text">{item.text}</div>
        
    </div>
  )
}

export default FeedbackItems;
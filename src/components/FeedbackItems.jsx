import Card from "./shared/Card"

function FeedbackItems({item}) {
  
  return (
    <>
      <Card reverse={true}>
        <div className="ratings">{item.rating}</div>
        <div className="card-text">{item.text}</div>
      </Card>

    </>
    
  )
}

export default FeedbackItems;
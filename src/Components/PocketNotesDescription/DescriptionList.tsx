import './Description.css'

const DescriptionList = ({item}) => {

  return (
    <div className="description" >
        <div>{item.user_notes}</div>
        <div className='date-time' >
            <div>{item.date}</div>
            <div>&bull;</div>
            <div>{item.time}</div>
        </div>
    </div>
  )
}

export default DescriptionList
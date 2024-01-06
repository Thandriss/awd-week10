const MyList = (props) => {
  return (
    <div>
        <h1>{props.header}</h1>
        <ol>
          {props.items.map((item)=> (
            <li key={item.id} onClick={()=>props.updateItem(item.id)} style={{ textDecoration: item.clicked?'line-through': ''}}>{item.text}</li>
          ))}
        </ol>
    </div>
  )
}


export default MyList
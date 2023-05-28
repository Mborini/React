import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";

 const BasicExample= (props) =>{
  const handleClick=()=>{
    props.Click(props.title)
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>




        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.descrition}
         
        </Card.Text>
        <Button onClick={handleClick} variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
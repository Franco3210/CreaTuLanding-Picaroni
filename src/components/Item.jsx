import { Card, Button } from "react-bootstrap";

const Item = ({ prod }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={prod.thumbnail}
        alt={prod.title}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{prod.title}</Card.Title>
        <Card.Text>{prod.description}</Card.Text>
        <Card.Text>
          <strong>${prod.price}</strong>
        </Card.Text>
        <Button variant="primary">Agregar al carrito 🛒</Button>
      </Card.Body>
    </Card>
  );
};

export default Item;

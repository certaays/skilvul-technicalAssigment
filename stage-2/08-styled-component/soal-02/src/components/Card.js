import { CardContainer, CardImage, CardBody, CardPrice, CardProductName } from './styles/Card';

import Button from './Button';


const Card = (props) => {
  const {products} = props

  return (
    <CardContainer width="500px">
      <CardImage src={products.imageUrl} />
      <CardBody>
        <CardPrice>{products.price}</CardPrice>
        <CardProductName>{products.productName}</CardProductName>
        <Button />
      </CardBody>
    </CardContainer>
  );
}
export default Card;
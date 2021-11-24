import React from 'react'
import { Card, Image, Button, Icon } from 'semantic-ui-react'

import './ItemListContainer.css';

const ItemListContainer = ({ img, description, price, note }) => (
    
  <div className='itemListContainer'>
        <Card>
            <Image src={img} wrapped ui={false} />
            <Card.Content>            
            <Card.Description>
                {description}
            </Card.Description>
            <p></p>
            <Card.Header>{price}</Card.Header>
            <Card.Meta>
            <span className='date'>{note}</span>
            </Card.Meta>
            </Card.Content>
            <Button animated='vertical'>
            <Button.Content hidden>Ajouter a panier</Button.Content>
            <Button.Content visible>
                <Icon name='shop' />
            </Button.Content>
            </Button>
        </Card>
  </div>

)


export default ItemListContainer
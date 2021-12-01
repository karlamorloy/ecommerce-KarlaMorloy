import React from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'

//import './Item.css';

const Item = ({ data }) => (
    
  <div className='item'>
        <Card>
            <Card.Content>            
            <Card.Header>{data.name}</Card.Header>
            <Card.Meta>
            <span className='date'>{data.ingredients.length}</span>
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


export default Item

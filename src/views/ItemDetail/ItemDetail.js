import React, { useEffect, useState } from 'react';
import { Card, Image } from 'semantic-ui-react';
import axios from 'axios';
import { useParams } from 'react-router';

const ItemDetail = () => {

    let id = useParams();

    let burgerID = id.id;

    const [burgerdetail, setBurgerdetail] = useState([]);

    useEffect(() => {
    axios(`https://my-burger-api.herokuapp.com/burgers/${burgerID}`).then((res) =>
      setBurgerdetail(res.data)
    );
    }, [burgerID]);


    return (
        <div>
          <h1>Burger details</h1>
          {burgerdetail.map((burger) => {
            return (
              <Card key={burger.id}>
                <Image src='https://www.burgertimes.fr/userfiles/24637/Burger-Times-%C3%A0-Beausoleil1.3.jpg' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{burger.name}</Card.Header>
                  <Card.Meta>
                    <span className='date'>{burger.restaurant}</span>
                  </Card.Meta>
                  <Card.Description>{burger.description}</Card.Description>
                </Card.Content>
              </Card>
            );
          })}
        </div>
      );
}

export default ItemDetail 

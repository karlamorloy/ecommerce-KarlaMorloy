import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

import './ItemList.css';

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

const ItemList = () => {
	const [burgers, setBurgers] = useState([]);

	useEffect(() => {
		fetch('https://my-burger-api.herokuapp.com/burgers')
			.then((response) => response.json())
			.then((json) => setBurgers(json));
	}, []);


	return (
		<div className='ItemList'>
			<div className='Item'>
				{burgers.map((burger) => {
					return(
						<div key={burger.id}>
							<Link to={`/detail/${burger.id}`}>
							<Item data={burger} />;
							</Link>
						</div>
					) 
				})}
			</div>
		</div>
	);



};

export default ItemList;


import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

import './ItemList.css';

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
					return <Item data={burger} key={burger.id} />;
				})}
			</div>
		</div>
	);
};

export default ItemList;
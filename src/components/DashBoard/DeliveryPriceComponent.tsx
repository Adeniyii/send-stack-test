import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../states/reducers';

const DeliveryPriceComponent = () => {
	const { price } = useSelector((state: RootState) => state.deliveryPrice);

	return (
		<div className='flex gap-4'>
			<h3>Delivery price:</h3>
			<span className="font-medium">{price ?? "--"}</span>
		</div>
	)
}

export default DeliveryPriceComponent

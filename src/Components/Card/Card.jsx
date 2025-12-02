import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { AiFillShopping, AiOutlineShopping } from 'react-icons/ai';
import { zustandStore } from '../../hooks/zustandStore';

const Card = ({ product }) => {
	const {
		addToFavorite,
		removeFromFavorite,
		favorite,
		cart,
		addToCart,
		removeFromCart,
	} = zustandStore();
	const [isFavorite, setIsFavorite] = useState(
		favorite.find(id => id == product.id) ? true : false
	);
	const handleFavorite = () => {
		if (favorite.find(id => id == product.id)) {
			removeFromFavorite(product.id);
		} else {
			addToFavorite(product.id);
		}
		setIsFavorite(!isFavorite);
	};
	const [isCart, setIsCart] = useState(
		cart.find(id => id == product.id) ? true : false
	);
	const handleCart = () => {
		if (cart.find(id => id == product.id)) {
			removeFromCart(product.id);
		} else {
			addToCart(product.id);
		}
		setIsCart(!isCart);
	};
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`/products/${product.id}`);
	};
	return (
		<div className='rounded-xl w-56 overflow-hidden'>
			<div className='relative'>
				<div className='flex'>
					<img
						src={product.images[0]}
						alt=''
						className='rounded-xl w-[232px] h-[309px]'
						onClick={handleClick}
					/>
				</div>
				{isFavorite ? (
					<FaHeart
						className='absolute top-3 right-3 animate-heart'
						color='#7f4dff'
						onClick={handleFavorite}
					/>
				) : (
					<FaRegHeart
						className='absolute top-3 right-3'
						color='#7f4dff'
						onClick={handleFavorite}
					/>
				)}
			</div>
			<div className='px-2 flex flex-col gap-2 mt-2'>
				<p className='text-sm font-semibold text-gray-700 line-clamp-2 dark:text-white'>
					{product.name}
				</p>
				<div className=''>
					<p className='text-xs text-gray-500 font-semibold'>
						{product.rating} ({product.review} sharhlar)
					</p>
					<div>
						<p className='text-sm bg-[#ff0] font-semibold  p-[3px] rounded-[15px]  my-1 mb-1'>
							{product.pricePerMonth} so'm/oyiga
						</p>
					</div>
				</div>
			</div>
			<div className=''>
				<div className='flex items-center justify-between pr-3'>
					<div className='px-2 flex flex-col gap-0'>
						<p className='font- line-through text-gray-500'>
							{product.fullPrice.toLocaleString('ru-RU')}
						</p>
						<p className='font-semibold'>
							{product.sellPrice.toLocaleString('ru-RU')}
						</p>
					</div>
					<div>
						{isCart ? (
							<AiFillShopping onClick={handleCart} size={25} />
						) : (
							<AiOutlineShopping onClick={handleCart} size={25} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Card;

import { Products } from '../../data/products';
import { zustandStore } from '../../hooks/zustandStore';
import Card from '../Card/Card';

const Favorite = () => {
	const { favorite } = zustandStore();
	const favoriteProducts = favorite.map(id =>
		Products.find(product => product.id == id)
	);

	return (
		<div className='px-[150px] py-5'>
			<h1 className='text-3xl font-semibold'>Saralanganlar</h1>
			<div className='flex  gap-4 flex-wrap'>
				{favoriteProducts.map(product => (
					<Card product={product} key={product.id} />
				))}
			</div>
		</div>
	);
};
export default Favorite;

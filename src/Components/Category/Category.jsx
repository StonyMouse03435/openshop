import { useParams } from 'react-router-dom';
import { mainData } from '../../data/mainData';
import Card from '../Card/Card';

const Category = () => {
	const { slug } = useParams();
	console.log(slug);
	const categoryData = mainData.find(category => category.slug === slug);
	console.log(categoryData);

	return (
		<div className=' px-[150px] py-10'>
			<h1 className='text-3xl font-semibold mb-3'>
				{categoryData.categoryName}
			</h1>
			<div className='flex justify-between gap-4 flex-wrap'>
				{categoryData.products.map(product => (
					<Card product={product} key={product.id} />
				))}
			</div>
		</div>
	);
};
export default Category;

import { Carousel } from '@material-tailwind/react';
import { mainData } from '../../data/mainData';
import Card from '../Card/Card';

const Hero = () => {
	return (
		<div className='px-[50px] py-5 lg:px-[100px] xl:px-[150px]'>
			<div className='h-40 lg:h-96 '>
				<Carousel
					className='rounded-xl'
					loop
					autoplay
					autoplayDelay={5000}
					transition={{ duration: 2 }}
				>
					<img
						src='https://web.openshop.uz/img/logo/seo_image.jpg'
						alt='image 1'
						className='h-full w-full object-cover'
					/>
					<img
						src='https://web.openshop.uz/img/logo/seo_image.jpg'
						alt='image 2'
						className='h-full w-full object-cover'
					/>
					<img
						src='https://web.openshop.uz/img/logo/seo_image.jpg'
						alt='image 3'
						className='h-full w-full object-cover'
					/>
					<img
						src='https://web.openshop.uz/img/logo/seo_image.jpg'
						alt='image 3'
						className='h-full w-full object-cover'
					/>
					<img
						src='https://web.openshop.uz/img/logo/seo_image.jpg'
						alt='image 3'
						className='h-full w-full object-cover'
					/>
					<img
						src='https://web.openshop.uz/img/logo/seo_image.jpg'
						alt='image 3'
						className='h-full w-full object-cover'
					/>
					<img
						src='https://web.openshop.uz/img/logo/seo_image.jpg'
						alt='image 3'
						className='h-full w-full object-cover'
					/>
					<img
						src='https://asset.openshop.uz/uploads/sliders/202511/4QOEwa4MlH0xRrkwrPMtDHTtSm6M2GMw.jpg'
						alt='image 3'
						className='h-full w-full object-cover'
					/>
				</Carousel>
			</div>

			{mainData.map(category => (
				<div>
					<h1 className='text-3xl font-semibold mb-3'>
						{category.categoryName}
					</h1>
					<div className='flex justify-between gap-4 flex-wrap'>
						{category.products.map(product => (
							<Card product={product} key={product.id} />
						))}
					</div>
				</div>
			))}
		</div>
	);
};
export default Hero;

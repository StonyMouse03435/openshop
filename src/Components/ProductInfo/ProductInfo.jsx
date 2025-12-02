import { GrNext } from 'react-icons/gr';
import { IoMdHeartEmpty } from 'react-icons/io';

import { useParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { Products } from '../../data/products';

const ProductInfo = () => {
	const { id } = useParams();
	const product = Products.find(product => product.id == id);
	return (
		<div className='px-[150px] flex justify-between items-start mt-5'>
			<div>
				<div className='flex items-center gap-1'>
					<p>Bosh sahifa</p>
					<p className='text-gray-500 mb-1 mt-1'>
						/ Barcha toifalar /Elektronika /Kompyuter texnikasi /Kompyuterlar
						/Tizimli bloklar
					</p>
				</div>
				<div className='flex flex-col gap-3'>
					<div className='w-[800px]'>
						<p className='text-[29px] font-semibold'>{product.name}</p>
					</div>
					<div>
						<div className='flex items-center'>
							<div className='flex gap-[2px] text-amber-300 pr-3'>
								<Rating
									initialValue={product.rating}
									allowFraction
									SVGstyle={{ display: 'inline-block' }}
									readonly
									size={20}
								/>
							</div>
							<div className='flex items-center gap-2 text-gray-600'>
								<p>
									{product.rating} ({product.review} sharh)
								</p>
								<p>{product.images.length} fotosurat</p>
								<p>{product.orders}+ buyurtma</p>
							</div>
						</div>
					</div>
				</div>
				<div className='pt-4'>
					<div className='flex items-start gap-5'>
						<div className='flex flex-col gap-2 w-14 h-[460px] overflow-hidden'>
							{product.images.map(imgUrl => (
								<img src={imgUrl} alt='' className='rounded-[8px]' />
							))}
						</div>
						<div className='flex w-80 gap-2.5'>
							<img src={product.images[0]} alt='' className='rounded-[16px]' />
							<img src={product.images[1]} alt='' className='rounded-[16px]' />
						</div>
					</div>
					<div className='flex items-center gap-2 mt-2 ml-20'>
						<div>
							<p className='font-semibold text-[20px]'>{product.rating}</p>
						</div>
						<div className='flex text-amber-300 text-lg'>
							<Rating
								initialValue={product.rating}
								allowFraction
								SVGstyle={{ display: 'inline-block' }}
								readonly
								size={20}
							/>
						</div>
						<div>
							<p className='underline text-gray-400'>{product.review} sharh</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className='border-gray-300 border rounded-[8px] p-5 mt-2 '>
					<div className='mb-2'>
						<p className='text-3xl font-bold tracking-wide s'>
							{product.sellPrice} so'm
						</p>
						<p className='text-gray-500  line-through'>
							{product.fullPrice} so'm
						</p>
					</div>
					<div className='bg-gray-100 p-3 rounded-[8px] flex flex-col gap-1 text-center'>
						<div className='bg-gray-200 py-0.5 px-0.5 rounded-[8px] text-center justify-center'>
							<div className='flex gap-1 justify-center'>
								<div className='px-6 py-1 hover:bg-gray-50 rounded-[8px] bg-white'>
									<p>24 oy</p>
								</div>
								<div className='px-6 py-1 hover:bg-gray-50 rounded-[8px]'>
									<p>12 oy</p>
								</div>
								<div className='px-6 py-1 hover:bg-gray-50 rounded-[8px]'>
									<p>6 oy</p>
								</div>
								<div className='px-6 py-1 hover:bg-gray-50 rounded-[8px]'>
									<p>3 oy</p>
								</div>
							</div>
						</div>
						<div className='flex items-center gap-1 justify-between hover:bg-gray-300 p-2 rounded-[4px]'>
							<div className='flex items-center gap-1'>
								<p className='px-1 py-1 bg-[#ffff00] rounded-[8px] font-semibold'>
									{product.pricePerMonth} so'm
								</p>
								<p className='text-[14px] font-medium'>x 24 oy</p>
							</div>
							<div>
								<GrNext />
							</div>
						</div>
					</div>
					<div className='justify-between flex mt-3.5 gap-1'>
						<button className='p-3  bg-gray-100 text-center w-full rounded-[8px] hover:bg-gray-300 duration-200'>
							1 klikda xarid qilish
						</button>
						<button className='p-3 px-4 bg-gray-100 rounded-[8px] hover:bg-gray-300 duration-200'>
							<IoMdHeartEmpty size={20} />
						</button>
					</div>
					<div>
						<button className='p-3 bg-[#7003ff] text-white w-full mt-3.5 rounded-[8px] hover:bg-[#7003ffe8]'>
							Savatga qo'shish
						</button>
					</div>
					<div className='mt-3 flex flex-col gap-1'>
						<div className='flex items-center gap-2'>
							<img
								src='https://uzum.uz/static/img/icons/checkmark.svg'
								alt=''
							/>
							<p>
								{product.available <= 0
									? 'Sotuvda yoq'
									: product.available == 1
									? 'Oxirgisi qoldi!'
									: `${product.available} dona xarid qilish mumkin`}
							</p>
						</div>
						<div className='flex items-center gap-2'>
							<img
								src='https://ke-images.servicecdn.ru/static/product-action/badge_bought.png'
								alt=''
								className='w-10'
							/>
							<p>Bu haftada {product.orders} kishi sotib oldi</p>
						</div>
					</div>
				</div>
				<div className=' border border-gray-300 p-5 rounded-[8px] mt-4 flex flex-col gap-2 mb-10'>
					<div className='flex justify-between items-center'>
						<p>Yetkazib berish 4 kun ichida</p>
						<p className='bg-[#5ca3ff] text-white text-[10px] font-semibold rounded-[4px] p-0.5'>
							Sotuvchi ombori
						</p>
					</div>
					<div>
						<p className='w-[370px] text-gray-700'>
							Uzum buyurtmalarni topshirish punktida yoki kuryer orqali
						</p>
					</div>
					<div className='bg-gray-300 w-full h-[0.5px]'></div>
					<p>Qulay usulda xavfsiz toʻlov</p>
					<p className='text-gray-700'>
						Karta orqali, naqd pulda yoki boʻlib toʻlang
					</p>
					<div className='flex items-center gap-2'>
						<img
							src='https://pulbek.uz/storage/cards/NCPJUnMW4U3ZWV6jog7f416CW39grBC9.webp'
							className='w-10'
						/>
						<img
							src='https://play-lh.googleusercontent.com/Z5N5Q371icM16saD5SvkbUJ7rwDMOhFtFF7m0cvzZrL4pOpZcEFmhPG0NhwvgWynjA'
							className='w-10 rounded-[8px]'
						/>
						<img
							src='https://play-lh.googleusercontent.com/nIm_1qFIlGn7IBsBAS8Tdibf6suQe36WBIuOZqZQ2WNrWgeGMgEYGb0-TfL-cWclv64'
							className='w-10 rounded-[8px]'
						/>
						<img
							src='https://api.uzcard.uz/wp-content/uploads/2024/07/Uzcard_Logo_-3.png'
							className='w-7 '
						/>
						<img
							src='https://humocard.uz/upload/medialibrary/208/8x0p9hi3h9jww0flwdm92dayhn0flulj/humo-logo-more.png'
							className='w-10'
						/>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg'
							className='w-10'
						/>
						<img
							src='https://assets.cdn.filesafe.space/jQECi6sQtFYareuS2ZkZ/media/66c62c60654d4d5e43edb065.png'
							className='w-10'
						/>
					</div>
					<div className='bg-gray-300 w-full h-[1px]'></div>
					<p>Qaytarish oson va tez</p>
					<p className='w-[370px] text-gray-700 '>
						Tovarlarni 10 kun ichida qabul qilamiz va darhol pulini qaytaramiz.
						Batafsil
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProductInfo;

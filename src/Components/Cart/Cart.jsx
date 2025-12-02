import React, { useState } from 'react';
import { BiLike } from 'react-icons/bi';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { Products } from '../../data/products';
import { zustandStore } from '../../hooks/zustandStore';
import CartItem from './CartItem';

const Cart = () => {
	const { cart } = zustandStore();
	const cartProducts = cart.map(id =>
		Products.find(product => product.id == id)
	);
	let totalInitial = 0;
	cartProducts.map(product => {
		totalInitial += product.sellPrice;
	});
	console.log(totalInitial);

	const [total, setTotal] = useState(totalInitial);

	return (
		<div className=' '>
			<div className='pl-[150px] flex text-[24px] font-semibold gap-2 mt-10 mb-4'>
				<p className='text-gray-800'>Savatingiz,</p>
				<p className='text-gray-400'>1 mahsulot</p>
			</div>
			<div className='flex gap-3 justify-center pr-[150px] '>
				<div className='flex justify-between flex-col w-[1290px] '>
					<div className='border border-gray-200 px-4 py-3.5 ml-[150px]'>
						<div className='flex justify-between pb-4'>
							<div className='flex items-center gap-2'>
								<div className=' border-black border-2 w-5 h-5 rounded-[2px]'></div>
								<p>Hammasini tanlash</p>
							</div>
							<div className='flex items-center gap-3'>
								<p>Yetkazib berishning eng yaqin sanasi:</p>
								<p className='text-[#7f4dff] border px-1'>21-aprel</p>
							</div>
						</div>
						<div className='w-full h-[2px] bg-gray-200'></div>
						<div className='flex flex-col pt-4'>
							<p className='text-gray-500 text-[14px]'>Sotuvchi omborida</p>
							<p className='text-[20px] font-semibold'>
								21-apreldan boshlab yetkazamiz
							</p>
						</div>
						{cartProducts.map(product => (
							<CartItem product={product} total={total} setTotal={setTotal} />
						))}
					</div>
				</div>
				<div className=' flex flex-col gap-4 '>
					<div className='px-3 py-3.5 border border-gray-200 rounded-lg'>
						<div className='flex items-start gap-10 w-full'>
							<div className='text-[#7f4dff]'>
								<BiLike size={25} />
							</div>
							<div>
								<p className='font-semibold'>
									Buyurtma uchun tovarlarni tanlang
								</p>
								<p className='text-[12px] text-gray-600 font-semibold'>
									Biz esa yetkazib berish qanday ishlashini ko‘rsatamiz
								</p>
							</div>
							<div className='text-gray-400'>
								<BsQuestionCircleFill size={25} />
							</div>
						</div>
						<div className='w-full h-1 bg-gray-200 rounded-2xlx mt-4'></div>
					</div>
					<div className='px-4 py-3.5 border border-gray-200  rounded-lg'>
						<p className='text-lg font-semibold mb-3'>Buyurtmangiz</p>
						<div className='flex justify-between mb-2'>
							<p>Mahsulotlar ({cart.length}):</p>
						</div>

						<div>
							<div className='flex justify-between items-start mt-4 mb-4'>
								<p>Jami:</p>
								<div className='text-right font-semibold'>
									<p className='ml-19'>{total} so'm</p>
								</div>
							</div>
							<button className='bg-gray-200 text-gray-400 w-full py-1.5 rounded-lg '>
								Rasmiylashtirishga otish
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;

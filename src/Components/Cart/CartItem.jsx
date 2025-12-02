import { useEffect, useState } from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
import { GoPlus } from 'react-icons/go';
import { IoTrashOutline } from 'react-icons/io5';
import { zustandStore } from '../../hooks/zustandStore';

const CartItem = ({ product, total, setTotal }) => {
	const { removeFromCart } = zustandStore();
	const { name, rating, available, images, fullPrice, sellPrice, id } = product;
	const [count, setCount] = useState(1);
	console.log(total);

	useEffect(() => {
		setTotal(total + sellPrice);
	}, []);
	function increase() {
		setCount(count + 1);
		setTotal(total + sellPrice);
	}
	function decrease() {
		setCount(count - 1);
		setTotal(total - sellPrice);
	}
	return (
		<div className='border m-1 p-2 border-gray-300'>
			<div className='flex pt-5'>
				<div className='flex items-center gap-5'>
					<input type='checkbox' />
					<img src={images[0]} className='w-23' />
				</div>
				<div className='flex flex-col  w-full'>
					<div className='flex items-center pl-10 gap-25 justify-between'>
						<p className='text-[16px]'>{name}</p>
						<div
							className='flex items-center text-gray-500'
							onClick={() => {
								removeFromCart(id);
							}}
						>
							<IoTrashOutline size={25} />
							<p className='min-w-20'>Yo'q qilish</p>
						</div>
					</div>
					<div className=' flex items-center gap-10 pl-10 justify-between pt-5'>
						<div className='items-start flex justify-between gap-30'>
							<div className='flex items-center gap-2'>
								<p className='text-gray-500'>Mavjud:</p>
								<p className='text-gray-800'>{available}</p>
							</div>
							<div className='flex items-center border border-gray-300  px-2 py-2 gap-7 rounded-sm'>
								<button onClick={decrease} disabled={count <= 1}>
									<AiOutlineMinus size={25} />
								</button>
								<p>{count}</p>
								<button onClick={increase}>
									<GoPlus size={25} />
								</button>
							</div>
						</div>
						<div className='flex flex-col text-right'>
							<p className='text-xl'>{sellPrice} so'm</p>
							<p className=' text-xl'>{sellPrice * count} so'm</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CartItem;

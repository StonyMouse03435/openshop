import { Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import Category from './Components/Category/Category';
import Favorite from './Components/Favorite/Favorite';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import ProductInfo from './Components/ProductInfo/ProductInfo';
const App = () => {
	return (
		<div className='dark:bg-dark dark:text-white'>
			<Navbar />
			<Routes>
				<Route path='/' Component={Hero} />
				<Route path='/category/:slug' Component={Category} />
				<Route path='/products/:id' Component={ProductInfo} />
				<Route path='/cart' Component={Cart} />
				<Route path='/favorite' Component={Favorite} />
			</Routes>
			{/* <Route path='/category/:categoriyaniNomi' Component={Category} /> */}
		</div>
	);
};

// export - chiqarish
// import - Olib kirish

export default App;

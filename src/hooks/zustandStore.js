import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const zustandStore = create(
	persist(
		(set, get) => ({
			favorite: [],
			addToFavorite: productId =>
				set(() => ({ favorite: [...get().favorite, productId] })),
			removeFromFavorite: productId =>
				set(() => {
					let eskiFavorite = get().favorite;
					let yangi = eskiFavorite.filter(id => id !== productId);
					return { favorite: yangi };
				}),
			cart: [],
			addToCart: productId => set(() => ({ cart: [...get().cart, productId] })),
			removeFromCart: productId =>
				set(() => {
					let eskiCart = get().cart;
					let yangi = eskiCart.filter(id => id !== productId);
					return { cart: yangi };
				}),
		}),
		{ name: 'tk-1530-uzum', storage: createJSONStorage(() => localStorage) }
	)
);

let arr = [1, 2, 3, 5, 6];

arr.filter(son => son > 3);

import { defineStore } from 'pinia';

const fakeStoreUrl = 'https://fakestoreapi.com';

// const factions = {
//   Necrons,
//   Tyranids
// }

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface Secondary {
  id: number;
  title: string;
  category: string;
  increments: number;
  
}

export interface Category {
  category: string;
}

interface ProductState {
  items: Record<string, Product>;
  ids: number[];
}

export const useProductStore = defineStore({
  id: 'products',

  state: (): ProductState => ({
    items: {},
    ids: [],
  }),

  getters: {
    list(): Product[] {
      return this.ids.map((i) => this.items[i]);
    },
    listbycategory: (state) => {
      return (userId) => state.users.find((user) => user.id === userId)
    },
    categories(): Category[] {
      return this.ids.map((i) => this.items[i]);
    },
    loaded(): boolean {
      return this.ids.length > 0;
    },
  },

  actions: {
    async fetchCategories() {
      if (this.loaded) return;

      const res = await fetch(`${fakeStoreUrl}/products/categories`);
      const data: Category[] = await res.json();
      this.ids = data.map((product) => {
        this.items[product.id] = product;
        return product.id;
      });
    },
    async fetchAll() {
      if (this.loaded) return;

      const res = await fetch(`${fakeStoreUrl}/products`);
      const data: Product[] = await res.json();
      this.ids = data.map((product) => {
        this.items[product.id] = product;
        return product.id;
      });
    },
  },
});

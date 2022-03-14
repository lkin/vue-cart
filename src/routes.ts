import { createRouter, createWebHistory } from 'vue-router'
import Secondaries from './pages/Secondaries.vue'
import Home from './pages/Home.vue'
import Product from './pages/Product.vue'
import Cart from './pages/Cart.vue'
import Faction from './pages/Faction.vue'
import End from './pages/end.vue'
// const Secondaries = {
//     props: ['faction'],
//     template: '<div>Faction: {{ faction }}</div>'
// }
const routes = [
    { path: '/', component: Home },
    { path: '/pick', component: Secondaries},
    { path: '/factions/:faction', name: 'factionstest', component: Faction},
    { path: '/:faction', name: 'factions', component: Faction},
    // { path: '/product/:productId', component: Product },
    { path: '/cart', component: Cart },
    { path: '/end', component: End }
];

const router = createRouter({
    history: createWebHistory(),
    routes, 
})

export default router
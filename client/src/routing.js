import ProductsPageWrapper from './Components/Products';
import BookPage from './Components/Products/BookPage';
import SearchPage from './Components/Products/SearchPage';
import Registration from './Components/Registration';
import Login from './Components/Registration/login';
import Logout from "./Components/Registration/logout";

export const routes = [
    {
        path: '/',
        component: ProductsPageWrapper
    },
    {
        path: '/books',
        component: ProductsPageWrapper
    },
	{
		path: '/books/:id',
		component: BookPage
	},
	{
		path: '/search',
		component: SearchPage
	},
	{
		path: '/registration',
		component: Registration
	},
	{
		path: '/login',
		component: Login
	},
	{
		path: '/logout',
		component: Logout
	},
];
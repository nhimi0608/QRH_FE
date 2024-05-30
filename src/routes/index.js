import { Home, Login, SignUp, AboutPage, Contact, ForgotPassword} from '../pages/index';
const router = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/signup', component: SignUp},
    { path: '/forgot-password', component: ForgotPassword},
    { path: '/about', component: AboutPage},
    { path: '/contact', component: Contact}
];

export {router}
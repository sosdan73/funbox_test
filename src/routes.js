import Home from './components/Home'
import Questions from './components/Questions'
import Test from './components/Test'
import Error from './components/Error'

const routes = [
    { path: '', component: Home },
    { path: '/questions', component: Questions },
    { path: '/test', component: Test },
    { path: '/error', component: Error },
    { path: '*', redirect: '/error' },
];

export default routes
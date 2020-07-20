import Authentication from '../components/pages/authentication-page'
import LoginForm from '../components/organisms/login-form'

export default [
    {
        exact: false,
        path: '/home',
        component: Authentication 
    },
    // {
    //     exact: true,
    //     path: '/auth/login',
    //     component: LoginForm
    // }
]
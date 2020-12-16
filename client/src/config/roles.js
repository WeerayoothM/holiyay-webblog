import Blog from "../containers/pages/Blog/Blog";
import Feed from "../containers/pages/Feed/Feed";
import Profile from "../containers/pages/Profile/Profile";
import Login from "../containers/pages/Login/Login";
import Register from "../containers/pages/Register/Register";
import Home from "../containers/pages/Home/Home";


const components = {
    home: {
        path: '/',
        page: Home
    },
    feed: {
        path: '/feed',
        page: Feed,
    },
    blog: {
        path: '/blog/:id',
        page: Blog
    },
    login: {
        path: '/login',
        page: Login
    },
    register: {
        path: '/register',
        page: Register
    },
    profile: {
        path: '/profile/:id',
        page: Profile
    },
};

const roles = {
    GUEST: [
        components.home,
        components.login,
        components.register
    ],
    USER: [
        components.home,
        components.feed,
        components.profile,
        components.blog,
    ]
};

export default roles;
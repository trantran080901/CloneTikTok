import { HeaderOnly } from '@/Components/Layout';
import HomePage from '@/pages/Home';
import Following from '@/pages/Following';
import Profile from '@/pages/Profile';
import Upload from '@/pages/Upload';
import Search from '@/pages/Search';
// Dùng khi không cần đăng nhập
const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/Following', component: Following },
    { path: '/@:nickname', component: Profile },
    { path: '/Upload', component: Upload, layout: HeaderOnly },
    { path: '/Search', component: Search, layout: null },
];

// Dùng khi cần đăng nhập
const privateRoutes = [];

export { publicRoutes, privateRoutes };

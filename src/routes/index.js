import { HeaderOnly } from '@/layout';
import HomePage from '@/pages/Home';
import Following from '@/pages/Following';
import Profile from '@/pages/Profile';
import Upload from '@/pages/Upload';
import Search from '@/pages/Search';
import config from '@/config';
// Dùng khi không cần đăng nhập
const publicRoutes = [
    { path: config.routes.home, component: HomePage },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

// Dùng khi cần đăng nhập
const privateRoutes = [];

export { publicRoutes, privateRoutes };

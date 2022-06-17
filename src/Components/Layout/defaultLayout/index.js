import Header from '../Components/Header';
import Sidebar from './Sidebar';

function defaultSidebar({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default defaultSidebar;

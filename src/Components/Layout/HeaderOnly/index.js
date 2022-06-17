import Header from '../Components/Header';
function defaultLayout({ children }) {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default defaultLayout;

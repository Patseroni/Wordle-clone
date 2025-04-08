import Header from "./Header"
import Menu from "./Menu"
import MainContentContainer from "./MainContentContainer"
//import Footer from "./Footer.jsx"

function PageWrapper() {
    return (
        <div className="page-wrapper">
            <Header />
            <Menu />
            <MainContentContainer />
        </div>
    )
}

export default PageWrapper
import Header from "./Header";
import Menu from "./Menu";
import MainContentContainer from "./MainContentContainer";

function PageWrapper({ wordLength, setWordLength }) {
    return (
        <div className="page-wrapper">
            <Header />
            <Menu />
            <MainContentContainer wordLength={wordLength} setWordLength={setWordLength} />
        </div>
    );
}

export default PageWrapper;
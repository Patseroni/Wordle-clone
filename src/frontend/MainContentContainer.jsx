import MainContent from './MainContent'
import Info from './info'
import { Routes, Route } from "react-router-dom";

function MainContentContainer({ wordLength, setWordLength }) {
    return (
        <>
            <div className="main-content-container">

                <Routes>
                    <Route path="/" element={
                        <MainContent
                            wordLength={wordLength}
                            setWordLength={setWordLength} />} />
                    <Route path="/info" element={<Info />} />
                </Routes>

            </div>

            <div className="grid">
                {/* empty div for layout */}
            </div>
        </>

    )

}
export default MainContentContainer
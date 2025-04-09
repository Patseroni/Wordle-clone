import MainContent from './MainContent'
import Info from './info'
import Highscores from '../backend/Highscores';
import { Routes, Route } from "react-router-dom";

function MainContentContainer() {
    return (
        <>
            <div className="main-content-container">

                <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/info" element={<Info />} />
                    <Route path="/highscores" element={<Highscores />} />
                </Routes>

            </div>

            <div className="grid">
                {/* empty div for layout purposes */}
            </div>
        </>

    )

}
export default MainContentContainer
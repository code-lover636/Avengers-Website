import {Home, Sidebar, Namebar, Characters} from './components/';
import './styles/App.css';
import {useState} from 'react';

const App = () => {
    const chrs = [["DOCTOR STRANGE","green"], ["THOR","red"], ["CAPTAIN AMERICA","blue"], ["IRON MAN","red"], ["HULK","green"], ["HAWKEYE","purple"], ["BLACK WIDOW","rgb(20, 20, 20)"], ["SPIDER MAN","red"], ["BLACK PANTHER","black"], ["SCARLET WITCH","red"]]
    const [currentPage, setCurrentPage] = useState(-1)
    return(
        <>
            
            <Sidebar setCurrentPage={setCurrentPage} currentPage={currentPage} chrs={chrs}/>
            <Namebar currentPage={currentPage} chrs={chrs}/>
            {
            currentPage === -1 ? <Home /> :
            <Characters fname={chrs[currentPage][0]} 
                        bg={`../assets/backgrounds/${currentPage}.png`}
                        char={`../assets/characters/${currentPage}.png`}
                        color={chrs[currentPage][1]}
                        />
            }            
        </>
    );
}

export default App;
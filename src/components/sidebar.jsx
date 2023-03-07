import React from 'react';

const Sidebar = ({setCurrentPage, currentPage, chrs}) => {
    
    return(
        <div className="sidebar">
            <div className="wrapper">
                <img src="../logo192.png" alt="logo" className="logo" />
            </div>
            <div className="scroll-wrap">
                <div className="up" onClick={
                    () => {currentPage>-1? setCurrentPage(currentPage - 1):setCurrentPage(currentPage)}
                }>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 16L12 6L22 16L20.225 17.775L12 9.55L3.775 17.775L2 16Z" fill="#F8F8F8"/>
                    </svg>
                </div>
                <small>
                    SCROLL
                </small>
                <div className="down" onClick={
                    () => {currentPage<(chrs.length-1)? setCurrentPage(currentPage + 1):setCurrentPage(currentPage)}
                }>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 8L12 18L2 8L3.775 6.225L12 14.45L20.225 6.225L22 8Z" fill="#F8F8F8"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
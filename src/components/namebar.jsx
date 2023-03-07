import React from 'react';

const Namebar = ({currentPage, chrs}) => {
    const chars = [["AVENGERS","blue"],...chrs] 
    console.log(chars)
    return(
        <div className="right-bar">
            <ul> 
                {chars.map( char =>
                    <li><p style={currentPage+1 === chars.indexOf(char)?{background: char[1]}:{background: "transparent"}}>{char[0]}</p></li>)}
            </ul>
        </div>
    );
}

export default Namebar;
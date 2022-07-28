import React, {useState} from 'react';

const Display = () => {
    const [isDisplayed, setDisplayed] = useState(true)

    const handleClick = () => {
        setDisplayed(!isDisplayed)
    }
    return (
        <div>
            <button onClick={handleClick}>Display / Hide</button>
            {isDisplayed && <Paragraph/>}
        </div>
    );
};


const Paragraph = () => {
    return (
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercise nulla pariatur. Excepteur sint occaecat
            cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>)
}

export default Display;
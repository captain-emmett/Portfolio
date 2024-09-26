import { useState, useRef } from 'react';
import './index.css';

const Home = () => {
    const [hometext, setHometext] = useState('im here');
    const [buttonText, setButtonText] = useState('click to leave');
    const numOfClicks = useRef(0);

    const handleClick = () => {
        console.log(numOfClicks.current);

        if(numOfClicks.current % 2 === 0){
            setHometext('im gone');
            setButtonText('click to come back');
            console.log(numOfClicks);
            numOfClicks.current += 1;


        } else {
            setHometext('im here');
            setButtonText('click to leave');
            numOfClicks.current += 1;
        }

        
    }

    return ( 
        <div className="Home">
            <h2>{hometext}</h2>
            <button onClick={handleClick}>{buttonText}</button>
        </div>
     );
}
 
export default Home;
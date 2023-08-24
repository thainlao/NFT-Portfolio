import React, {useState} from "react";
import '../styles/firstbody.css';

const Navbar = ({handeModalOpen, isButtonPressed}) => {
    const [isConnected, setIsConnected] = useState(false);
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabetString = latin + nums;

    const handleMouseOver = (event, index) => {
        if (!animationComplete[index]) return;
    
        let iteration = 0;
        setAnimationComplete(prevState => ({ ...prevState, [index]: false }));
    
        const interval = setInterval(() => {
          event.target.innerText = event.target.innerText
            .split("")
            .map((letter, idx) => {
              if (idx < iteration) {
                return event.target.dataset.value[idx];
              }
    
              return alphabetString.charAt(Math.floor(Math.random() * alphabetString.length));
            })
            .join("");
    
          if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
            setAnimationComplete(prevState => ({ ...prevState, [index]: true }));
          }
    
          iteration += 1 / 3;
        }, 15);
      };
    
      const handleMouseOut = (event, index) => {
        if (!animationComplete[index]) return;
        event.target.innerText = event.target.dataset.value;
      };
    
      const [animationComplete, setAnimationComplete] = useState({
        0: true,
        1: true,
        2: true,
      });

    return (
        <header className="main_header">
            <div className="header_menu">
                <div 
                onClick={handeModalOpen}
                className={`main_open_button ${isButtonPressed ? "pressed" : ""}`}>
                {isButtonPressed ? (
                  <>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </>
                ) : (
                  <>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </>
                )}
                </div>
                <p className="main_header_sub_text">{isButtonPressed ? 'CLOSE MENU' : 'MENU'}</p>
            </div>
            <h1 className="header_text">THAINLAO NFT</h1>
            <div className="connected">
            <button 
                onMouseOver={e => handleMouseOver(e, 0)}
                onMouseOut={e => handleMouseOut(e, 0)} 
                className="connect_wallet_button"
                data-value='CONNECT WALLET'
                onClick={() => setIsConnected('_connected')}
                >CONNECT WALLET
            </button>
            
            </div>
            
        </header>
    )
}

export default Navbar
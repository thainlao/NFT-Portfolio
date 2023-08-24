import React, {useState} from "react";
import '../styles/firstbody.css';
import Navbar from "./Navbar";
import '../styles/modal.css';
import { Link, useNavigate } from "react-router-dom";

const Firstbody = () => {
    const latin = 'ABCDEFGHIJK&!{}[]?';
    const nums = '0123456789';
    const alphabetString = latin + nums;

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

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
        3: true,
        4: true,
        5: true,
        6: true,
        7: true,
        8: true,
        9: true,
        10: true,
      });
      const [modalOpen, setIsModalOpen] = useState(false);
      const [isButtonPressed, setIsButtonPressed] = useState(false);
      
      const handeModalOpen = () => {
        setIsModalOpen(!modalOpen);
        setIsButtonPressed(!isButtonPressed);
      }

    return (
        <div className="main_body">
        <Navbar handeModalOpen={handeModalOpen} isButtonPressed={isButtonPressed}/>
        
            <div className="center_body">
                <p className="main_text_sign">Discovered new Paradigm of the future</p>
                <div className="words">
                    <h1 className="main_text">CYBER</h1>
                    <h2 className="main_text_word">KNIGHTS</h2>
                </div>
                <div className="subtext">
                <h3 style={{marginBottom: '20px'}} className="main_text_neon">THE CORE</h3>
                    <h3 className="main_text_subtext">CYBERKNIGHTS IS BUILDING A CAPTIVATION</h3>
                    <h4 className="main_text_subtext">UNIVERSE THRUGHT BEAUTIFUL COLLECTIBLES,</h4>
                    <h5 className="main_text_subtext">ENGAGINS CONTENT AND INTERACTIOVE</h5>
                    <h4 className="main_text_subtext">CREATE / EXPAND YOUR REALITY.</h4>
                </div>
                <div className="buttons">
                  <Link to='/nftbody'
                      onMouseOver={e => handleMouseOver(e, 1)}
                      onMouseOut={e => handleMouseOut(e, 1)} 
                      className={`body_button ${loading ? 'loading' : ''}`}
                      data-value='CLICK TO EXPLORE'
                      >CLICK TO EXPLORE
                  </Link>
                  <Link to='/buybody'
                      onMouseOver={e => handleMouseOver(e, 10)}
                      onMouseOut={e => handleMouseOut(e, 10)} 
                      className={`body_button ${loading ? 'loading' : ''}`}
                      data-value='CLICK TO BUY'
                      >CLICK TO BUY
                  </Link>
                </div>
            </div>
            {modalOpen && (
              <div className="modal">
                <div className="modal_content">
                  <div className="modal_section_left">
                    <p onMouseOver={e => handleMouseOver(e, 2)} onMouseOut={e => handleMouseOut(e, 2)} data-value='EXPLORE' className="modal_text">EXPLORE</p>
                    <p onMouseOver={e => handleMouseOver(e, 3)} onMouseOut={e => handleMouseOut(e, 3)} data-value='CYBERKNIGHTS' className="modal_text">CYBERKNIGHTS</p>
                    <p onMouseOver={e => handleMouseOver(e, 4)} onMouseOut={e => handleMouseOut(e, 4)} data-value='STORY DETAILING' className="modal_text">STORY DETAILING</p>
                    <p onMouseOver={e => handleMouseOver(e, 5)} onMouseOut={e => handleMouseOut(e, 5)} data-value='PARTS SHOP' className="modal_text">PARTS SHOP</p>
                    <p onMouseOver={e => handleMouseOver(e, 6)} onMouseOut={e => handleMouseOut(e, 6)} data-value='MECH ASSEMBLY' className="modal_text_colored">MECH ASSEMBLY</p>
                    <p onMouseOver={e => handleMouseOver(e, 7)} onMouseOut={e => handleMouseOut(e, 7)} data-value='GLOSSARY BLOG' className="modal_text">GLOSSARY BLOG</p>
                    <p onMouseOver={e => handleMouseOver(e, 8)} onMouseOut={e => handleMouseOut(e, 8)} data-value='COMMUNITY' className="modal_text">COMMUNITY</p>
                  </div>

                  <div className="right_section">
                  <div className="modal_section_right">
                    <p className="modal_text_right_title">LINKS</p>
                    <p className="modal_text_right">ABOUT</p>
                    <p className="modal_text_right">FAQS</p>
                    <p className="modal_text_right">RESOURCES</p>
                    <p className="modal_text_right">CAREERS</p>
                    <p className="modal_text_right">MECH_STYLES</p>
                    <p className="modal_text_right">MECH INFO</p>
                    <p className="modal_text_right">LORE</p>
                    <p className="modal_text_right">GUIDE</p>
                  </div>

                  <div className="modal_section_right_social">
                    <p className="modal_text_right_title">SOCIAL</p>
                    <p className="modal_text_right">DISCORD</p>
                    <p className="modal_text_right">TWITTER</p>
                    <p className="modal_text_right">YOUTUBE</p>
                    <p className="modal_text_right">INSTAGRAM</p>
                    <p className="modal_text_right">SUBSTACK</p>
                  </div>

                    <button 
                    onMouseOver={e => handleMouseOver(e, 9)}
                    onMouseOut={e => handleMouseOut(e, 9)} 
                    data-value='SUBSCRIBE ON SUBSTACK'
                    className="sub">SUBSCRIBE ON SUBSTACK</button>
                    <p className="modal_text_right_title">MARKETPLACE</p>
                    <button 
                    onMouseOver={e => handleMouseOver(e, 1)}
                    onMouseOut={e => handleMouseOut(e, 1)} 
                    className="body_button"
                    data-value='CYBERKNIGHTS ON OPENSEA'
                    >CYBERKNIGHTS ON OPENSEA
                </button>
                  </div>
                </div>
              </div>
            )}
        </div>
    );
}

export default Firstbody;
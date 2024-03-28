import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="part-3">
        <div className="container--one">
            <nav style={{display: "flex",alignItems: "center"}}>
                <p>Meet our Robots:</p>
                <img id="image--a" src="./images/insta.png"/>
                <img id="image--a" src="./images/discord.png"/>
                <img id="image--a" src="./images/twitter.png"/>
                <img id="image--a" src="./images/youtube.png"/>
            </nav>
            <nav style={{backgroundColor: "#1a1a1a",padding: "1.5em",color: "#fb0",height: "1em",width: "15em"}}>
                <h1 style={{margin: "0"}}>Subscribe to your NewsLetter</h1>
            </nav>
        </div>
        <div className="container--two">
            <nav>
                <h1>Skins<span>  // </span></h1>
                    <ul className="container--two-a">
                        <li>iphone skins</li>
                        <li>pixel skins</li>
                        <li>samsung galaxy skins</li>
                        <li>oneplus skins</li>
                        <li>macbook skins</li>
                        <li>razer blade skins</li>
                        <li>dell xps skins</li>
                        <li>surface skins</li>
                        <li>ipad + pencil skins</li>
                        <li>ipad keyboard skins</li>
                        <li>airpods skins</li>
                        <li>nintendo switch skins</li>
                        <li>xbox skins</li>
                        <li>skins compatible with playstations</li>
                        <li>steelseries skins</li>
                        <li>lenovo skins</li>
                    </ul>
                <h1>phone cases<span>   //</span></h1>
                    <ul  className="container--two-b">
                        <li>iphone phone cases</li>
                        <li>oneplus phone cases</li>
                        <li>pixel phone cases</li>
                        <li>samsung galaxy phone cases</li>
                    </ul>
                <h1>screen protectors<span>    //</span></h1>
                    <ul  className="container--two-c">
                        <li>iphone 13 screen protectors</li>
                        <li>iphone 12 screen protectors</li>
                        <li>nintendo switch screen protectors</li>
                        <li>steam deck screen protectors</li>
                    </ul>
            </nav>   
            <div className="container--three" style={{display:"flex"}}>
                <nav className="container--three--a" >
                    <h1>payment methods<span>   //</span></h1>
                    <ul>
                        <li style={{width:"4em"}}><img id="image--a" src="./images/visa.svg"/></li>
                        <li style={{width:"3em"}}><img id="image--a" src="./images/mastercard.svg"/></li>
                        <li style={{width:"4em"}}><img id="image--a" src="./images/paypal.svg"/></li>
                    </ul>
                </nav>
                
                <nav className="container--three--c">
                    <h1>company<span>   //</span></h1>
                    <div>
                        <nav><img id="image--a" src="./images/message.svg"/></nav>
                        <nav>
                            <p>robots@dbrand.com</p><p>Contact Us</p>
                        </nav>
                    </div>
                    <div>
                        <nav><img id="image--a" src="./images/message.svg"/></nav>
                        <nav>
                            <p>dbrand</p><p>CP.O. Box 98190</p><p>970 Queen Street East</p><p>Toronto, ON M4M 1J0</p><p>Toronto, ON M4M 1J0</p>
                        </nav>
                    </div>
                
                </nav>
            </div> 
        </div>
       
            <nav className="container--three--b">
                <h1>bits and bytes<span>    //</span></h1>
                <ul>
                    <li>Contact Us</li>
                    <li >Giveaways</li>
                    <li>Shipping</li>
                </ul>
            </nav>
        
        
        <div  className="Footer">
            <nav style={{margin: "0"}}>
                        <p>dbrand © 4022 :: All rights reserved</p>
            </nav>
            <nav style={{display: "flex",flexDirection:"row",margin: "0",height: "0",fontSize: "1em"}}>
                <p>Refund Policy</p><span>//</span><p>Privacy Policy</p><span>//</span><p>Website Terms of condition</p><span>//</span>
            </nav>
        </div>
    </div>
  )
}

export default Footer;
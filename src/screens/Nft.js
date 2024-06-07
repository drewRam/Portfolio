import React from 'react';
// import 'boxicons/css/boxicons.min.css';
import '../css/Nft.css';

const Nft = () => {
  return (
    <div>
      <nav className="nft-nav">
        <a  className="logo">AsmrNFT</a>
        <div className="links">
          <a >Home</a>
          <a >Features</a>
          <a >Blog</a>
          <a >About Us</a>
        </div>
        <div className="login">
          <button className="signup">Get Started</button>
          <button>Login</button>
        </div>
      </nav>

      <header>
        <div className="left">
          <h1>Let's Buy Some <span>AsmrNFT</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, eaque harum. Nobis ipsam magni labore?</p>
          <a >
            <i className='bx bx-basket'></i>
            <span>Buy Now</span>
          </a>
        </div>
        <img src="../Nft/assets/header.png" alt="Header" />
      </header>

      <h2 className="separator">Sell Your NFTs</h2>

      <div className="sell-nft">
        <div className="item">
          <div className="header">
            <i className='bx bx-wallet-alt'></i>
            <h5>Connect Wallet</h5>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste modi ab sunt dolores ex dolor, suscipit fuga sed earum.</p>
        </div>
        <div className="item">
          <div className="header">
            <i className='bx bx-cart-alt'></i>
            <h5>NFT Marketplace</h5>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste modi ab sunt dolores ex dolor, suscipit fuga sed earum.</p>
        </div>
        <div className="item">
          <div className="header">
            <i className='bx bx-grid-alt'></i>
            <h5>Launch DApps</h5>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste modi ab sunt dolores ex dolor, suscipit fuga sed earum.</p>
        </div>
      </div>

      <h2 className="separator">Super Hot NFTs</h2>

      <div className="nft-shop">
        <div className="category">
          <a >AsmrGraph</a>
          <a >Abstract</a>
          <a >Monkey</a>
          <a >Cars</a>
          <a >Trending</a>
        </div>

        <div className="nft-list">
          <div className="item">
            <img src="../Nft/assets/item-1.png" alt="NFT 1" />
            <div className="info">
              <div>
                <h5>CryptoArt</h5>
                <div className="btc">
                  <i className='bx bxl-bitcoin'></i>
                  <p>0.29 BTC</p>
                </div>
              </div>
              <p>5 of 33</p>
            </div>
            <div className="bid">
              <p>2h 28m 1s</p>
              <a >Place a Bid</a>
            </div>
          </div>
          <div className="item">
            <img src="../Nft/assets/item-2.png" alt="NFT 2" />
            <div className="info">
              <div>
                <h5>Abs-Art</h5>
                <div className="btc">
                  <i className='bx bxl-bitcoin'></i>
                  <p>0.21 BTC</p>
                </div>
              </div>
              <p>7 of 12</p>
            </div>
            <div className="bid">
              <p>1h 28m 1s</p>
              <a >Place a Bid</a>
            </div>
          </div>
          <div className="item">
            <img src="../Nft/assets/item-3.png" alt="NFT 3" />
            <div className="info">
              <div>
                <h5>TestArt</h5>
                <div className="btc">
                  <i className='bx bxl-bitcoin'></i>
                  <p>0.21 BTC</p>
                </div>
              </div>
              <p>9 of 23</p>
            </div>
            <div className="bid">
              <p>4h 21m 1s</p>
              <a >Place a Bid</a>
            </div>
          </div>
          <div className="item">
            <img src="../Nft/assets/item-4.png" alt="NFT 4" />
            <div className="info">
              <div>
                <h5>Art-4</h5>
                <div className="btc">
                  <i className='bx bxl-bitcoin'></i>
                  <p>0.45 BTC</p>
                </div>
              </div>
              <p>1 of 33</p>
            </div>
            <div className="bid">
              <p>0h 28m 1s</p>
              <a >Place a Bid</a>
            </div>
          </div>
        </div>
      </div>

      <div className="view-more">
        <button>View More</button>
      </div>

      <h2 className="separator">Best Sellers</h2>

      <div className="sellers">
        <div className="item">
          <img src="../Nft/assets/profile-1.png" alt="Seller 1" />
          <div className="info">
            <h4>Jhone D</h4>
            <p>15.2K</p>
          </div>
        </div>
        <div className="item">
          <img src="../Nft/assets/profile-2.png" alt="Seller 2" />
          <div className="info">
            <h4>Gregory B</h4>
            <p>12.7K</p>
          </div>
        </div>
        <div className="item">
          <img src="../Nft/assets/profile-3.png" alt="Seller 3" />
          <div className="info">
            <h4>Stephen E</h4>
            <p>7.9K</p>
          </div>
        </div>
        <div className="item">
          <img src="../Nft/assets/profile-4.png" alt="Seller 4" />
          <div className="info">
            <h4>Russell M</h4>
            <p>4.2K</p>
          </div>
        </div>
      </div>

      <footer className="nft-footer">
        <h3>Create, Explore & Collect Abstract NFTs</h3>
        <div className="right">
          <div className="links">
            <a >Privacy Policy</a>
            <a >Cooperation</a>
            <a >Sponsorship</a>
            <a >Contact Us</a>
          </div>
          <div className="social">
            <i className='bx bxl-instagram'></i>
            <i className='bx bxl-facebook-square'></i>
            <i className='bx bxl-github'></i>
          </div>
          <p>Copyright © 2024 AsmrProg, All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Nft;
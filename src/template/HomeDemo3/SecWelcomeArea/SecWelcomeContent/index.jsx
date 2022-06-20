function SecWelcomeContent({img}){
  return(
      <div className="welcome-content">
          <div className="promo-section">
              <div className="integration-link">
                  <span className="integration-icon">
                      <img src={img} width="24" height="24" alt="" />
                  </span>
                  <span className="integration-text">Trade Tokens On The Songbird Blockchain</span>
              </div>
          </div>
          <h1>Oracle Swap The Premiere DEX On The Songbird Network</h1>
          <p>
            Oracle Swap is an open DeFi platform on the Songbird Network where users can swap their tokens! 
            It is a Decentralized Exchange that creates an open market for users to create liquidity for their tokens. 
            It also provides a variety of opportunities to gain yield by providing liquidity and staking! 
          </p>
          <div className="dream-btn-group">
              <a href="https://dex.oracleswap.io/" target="_blank" className="btn dream-btn mr-3">DEX</a>
              {/* <a href="https://mint.oracleswap.io/" target="_blank" className="btn dream-btn">MINT NOW!</a> */}
          </div>
      </div>
  )
}

export default SecWelcomeContent
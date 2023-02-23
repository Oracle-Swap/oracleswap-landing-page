const SecIco = ({logo}) => {
	return(
        <div className="col-12 col-md-5">
          <div className="footer-copywrite-info">
            {/* Copywrite */}
            <div className="copywrite_text wow fadeInUp" data-wow-delay="0.2s">
              <div className="footer-logo">
                <a href="#"><img src={logo} alt="logo" /></a>
              </div>
              <p>Oracle Swap is proud to bring an open DeFi ecosystem on to the Songbird Network for the Flare Network community!</p>
            </div>
            {/* Social Icon */}
            <div className="footer-social-info wow fadeInUp" data-wow-delay="0.4s">
              <a href="https://t.me/OracleSwapOffical"><i className="fa fa-telegram" aria-hidden="true" /></a>
              <a href="https://twitter.com/Oracle_Swap"><i className="fa fa-twitter" aria-hidden="true" /></a>
              <a href="https://discord.com/invite/WbDnWcRBxw"><i className="fa fa-comment" aria-hidden="true" /></a>
              <a href="https://www.youtube.com/channel/UCIaaQbRoi5TV7epRLg8y3Mg"><i className="fa fa-youtube" aria-hidden="true" /></a>
              <a href="https://github.com/Oracle-Swap"><i className="fa fa-github" aria-hidden="true" /></a>

              {/* <a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a> */}
            </div>
          </div>
        </div>
	)
}

export default SecIco
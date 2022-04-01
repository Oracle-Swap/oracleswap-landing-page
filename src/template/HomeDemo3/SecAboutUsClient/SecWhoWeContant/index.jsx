const Span = () => <span></span>

const SecWhoWeContant = () => {

  return (
    <div className="col-12 col-lg-6">
        <div className="who-we-contant">
            <div className="dream-dots" data-aos="fade-up">
                {Array(7).fill().map((key) => (
                		<Span />
                	))}
            </div>
            <h4 data-aos="fade-up">THE AIRDROP 💸</h4>
            <p data-aos="fade-up">Each Oracle NFT will give a certain amount of Oracle points based on the multipliers of the traits it has.</p>
            <p data-aos="fade-up">These points will qualify you to receive the airdrop of Oracle Tokens when the NFT phase has ended and the airdrop starts!</p>
            <p data-aos="fade-up">In addition, if you hold Rare NFT Club NFTs such as Rare Pepes, Pixel Pepes or REDPILL you will automatically be elegible for a certain amount of points/tokens based on your total holdings.</p>
            <p data-aos="fade-up">A small portion of $ORACLE tokens will be airdropped to Wrapped Songbird (WSGB) holders.</p>
            <p data-aos="fade-up">The Mint Phase will start on April 20th @ 12:00 P.M. UTC. and ends May 20th @ 12:P.M. UTC.</p>
            <p data-aos="fade-up">⚠ MAKE SURE YOU ARE HOLDING ALL OF YOUR NFTS AT THE TIME OF THE SNAPSHOT AND UNTIL THE AIRDROP IS OFFICIALLY COMPLETE. IF YOU ARE NOT HOLDING THE NFTS AT THE TIME OF THE SNAPSHOT/AIRDROP YOU MAY BE MISSED!!</p>

            <a className="btn dream-btn mt-30" href="https://docs.oracleswap.io/the-oracle-nfts-airdrop/nft-partners" data-aos="fade-up">LEARN MORE ABOUT THE AIRDROP</a>
        </div>
    </div>
  );
}

export default SecWhoWeContant;
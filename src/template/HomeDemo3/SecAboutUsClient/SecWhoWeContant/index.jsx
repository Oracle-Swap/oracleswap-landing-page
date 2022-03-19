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
            <p data-aos="fade-up">For participating in the Mint/Pledge, you will receive points. For every Oracle PLEDGE NFT you mint/hold you will get 10,000 airdrop points. Anyone with these points will be airdropped free tokens called $ORACLE.</p>
            <p data-aos="fade-up">The $ORACLE tokens will be airdropped to all participants who Minted/Pledged for their belief and support of a cryptocurrency future.</p>
            <p data-aos="fade-up">A small portion of $ORACLE tokens will be airdropped to Wrapped Songbird (WSGB) holders.</p>
            <p data-aos="fade-up">Another way you can receive airdrop points is by holding $PEPE, $REDPILL, and $PIXEL NFTs.</p>
            <p data-aos="fade-up">1 $PEPE = 2,500 Oracle Airdrop Points</p>
            <p data-aos="fade-up">1 $PIXEL = 5,000 Oracle Airdrop Points</p>
            <a href="https://mint.rarepepclub.com/">GET THE PEPE OR PIXEL NFTs 🐸</a>
            <p data-aos="fade-up">1 $REDPILL = 10,000 Oracle Airdrop Points</p>
            <a href="https://mint.rarepepclub.com/">GET THE RED PILL! 💊</a>
            <p data-aos="fade-up">For example, if you hold 5 $PEPE NFTs you will get 12,500 Airdrop Points.</p>
            <p data-aos="fade-up">The Mint/Pledge will start on March 14th @ 12:00 P.M. UTC. and ends March 22nd @ 12:P.M. UTC.</p>
            <p data-aos="fade-up">⚠ MAKE SURE YOU ARE HOLDING ALL OF YOUR NFTS AT THE TIME OF THE SNAPSHOT AND UNTIL THE AIRDROP IS OFFICIALLY COMPLETE. IF YOU ARE NOT HOLDING THE NFTS AT THE TIME OF THE SNAPSHOT/AIRDROP YOU MAY BE MISSED!!</p>

            


            <a className="btn dream-btn mt-30" href="#" data-aos="fade-up">MINT NOW TO PARTICIPATE!</a>
        </div>
    </div>
  );
}

export default SecWhoWeContant;
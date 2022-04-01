import SectionHeading from '../../../components/SectionHeading'

const SecHowItWorks = ({ data, imgPhone, description }) => {

  return (
    <section className="features section-padding-100-0">
      <SectionHeading
        title='The Oracles NFTs'
        text='The Oracles are messengers from beyond that encourage humanity to utilize decentralized technologies to uplift their civilization. The Oracles believe Blockchains, Digital Assets and Decentralized exchanges can liberate humanity from the corrupt corporations and instutions that control the world. If you agree with this message, mint an Oracle NFT to participate in the airdrop!'
      />

      <div className="container">
        <div className="dream-btn-group text-center">
            <a href="https://docs.oracleswap.io/the-oracle-nfts-airdrop/the-oracles-story" className="btn dream-btn">Read The Folklore!</a>
        </div>


        <div className="row">
          <div className="service-img-wrapper how col-lg-6 col-md-12 col-sm-12">
            <div className="image-box">
              <img src={imgPhone} className="center-block img-responsive phone-img" alt="" />
            </div>
          </div>
          <div className="services-column col-lg-6 offset-lg-0 col-md-10 offset-md-1 col-xs-10 offset-xs-1">
            {/*Services Block Four*/}
            {data && data.map((item, key) => (
              <div className="services-block-four how" key={key}>
                <div className="inner-box">
                  <div className="step">{item.step}</div>
                  <h3><a >{item.title}</a></h3>
                  <div className="text">{item.description}</div>
                </div>
              </div>
            ))}
            <div className="dream-btn-group">
              <a href="https://docs.oracleswap.io/the-oracle-nfts-airdrop/the-oracles-multipliers" className="btn dream-btn mr-3">Learn More About The Multipliers!</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default SecHowItWorks;
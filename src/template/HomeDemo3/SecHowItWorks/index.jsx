import SectionHeading from '../../../components/SectionHeading'

const SecHowItWorks = ({ data, imgPhone }) => {

  return (
    <section className="features section-padding-100-0">
      <SectionHeading
        title='THE ORACLE PLEDGE'
        text='Our world is collapsing before our very eyes. Cryptocurrency is an obvious solution to many of the problems our world currently faces.
            You are making THE PLEDGE to prove how strongly you believe in the importance of freedom in cryptocurrency and exchange. We believe Crypto currencies play an integral role in our sovereign collective future. We recognize the importance of decentralized networks and exchanges in the effort to combat the central banks stranglehold on the world. If you agree with this, then you can show your support by making a pledge via minting a PLEDGE NFT.
            If you support this movement and participate in THE PLEDGE, you will be airdropped free tokens. These tokens will have no value. Remember, this is not an investment of any kind, you should have no expectations of profit from the work of others. This is a pledge  to show you support a decentralized and autonomous blockchain future free from the chains and restrictions placed upon us by corrupt banks and institutions.'
      />
      
      <div className="container">
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
                  <h3><a href="#">{item.title}</a></h3>
                  <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda beatae provident non hic eum dolores natus, vitae, quae, facere perferendis.</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecHowItWorks;
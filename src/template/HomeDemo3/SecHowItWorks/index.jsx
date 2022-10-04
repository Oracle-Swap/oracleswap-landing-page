import SectionHeading from '../../../components/SectionHeading'

const SecHowItWorks = ({ data, imgPhone, description }) => {

  return (
    <section className="features section-padding-100-0">
      <SectionHeading
        title='EARN INTEREST ON YOUR $SGB/$FLR'
        text='You can earn upto 5-10% on your Songbird and Flare by delegating to the OracleSwap FTSO Signal Provider. OracleSwap uses a machine learning algorithm to aggregate and submit the most accurate price data possible to the Songbird/Flare Network Time Series Oracle. Delegate your vote to the OracleSwap FTSO to start earning NOW!'
      />

      <div className="container">
        
        <div className="dream-btn-group text-center">
            <a href="https://earn.oracleswap.io/" className="btn dream-btn">EARN NOW</a>
        </div>
        <br/>
        <br/>

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
              <a href="https://earn.oracleswap.io" className="btn dream-btn mr-3">Delegate Now</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default SecHowItWorks;
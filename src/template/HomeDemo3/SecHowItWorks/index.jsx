import SectionHeading from '../../../components/SectionHeading'
import ARCs from './arcs.jpg'


const SecHowItWorks = ({ data, imgPhone, description }) => {

  return (
    <section className="features section-padding-100-0">
      <SectionHeading
        title='EARN INTEREST ON YOUR $SGB/$FLR'
        text='You can earn upto 5-10% on your Songbird and Flare by delegating to an FTSO Signal Provider.'
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

      <br />
      <br />  
      <SectionHeading
        title='The Reach Of the Archetypes!'
        text='The ARCs are a special NFT collection, like nothing else ever done before. Their core distribution mechanic is interwoven with the Flare Time Series Oracle system. The Alien Archetypes are here to connect with and unify humanity with the greater galactic archetypes. A limited amount of ARCs are randomly distributed by the will of The Oracles to participants of the FTSO System for free every epoch!'
      >  
      
      </SectionHeading>
 
      <div className="text-center mb-5">
          <a className="btn dream-btn " href="https://earn.oracleswap.io/archetypes" data-aos="fade-up">MINT AN ARC</a>
          <a className="btn dream-btn " href="https://docs.oracleswap.io/the-oracle-nfts/the-archetypes-nfts" data-aos="fade-up">LEARN MORE</a>
        </div>
      
      <div className="container">
        <div className="row">
          {/* <SecSingleCoolFact data={data}/> */}
          <img src={ARCs} alt="Trulli" width="1280" height="441" />
          


        </div>
      </div>
    </section>

    
  );
}

export default SecHowItWorks;
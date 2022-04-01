import multi from './TraitMultipliers.png'

const Span = () => <span></span>

const Multipliers = ({ data }) => {

  return (
    <section className="trust-section section-padding-10">



      <div className="container">
        <div className="section-heading text-center">
          <div className="dream-dots justify-content-center" data-aos="fade-up" data-aos-delay='200'>
            {Array(7).fill().map((item, key) => (
              <Span key={key} />
              ))}
          </div>
          <h2 data-aos="fade-up" data-aos-delay='300'>The Multipliers!</h2>
          <p data-aos="fade-up" data-aos-delay='400'>Each trait has a multiplier value. The combination of these traits determine your airdrop points!</p>
          <a className="btn dream-btn mt-30" href="https://docs.oracleswap.io/the-oracle-nfts-airdrop/the-oracles-multipliers" data-aos="fade-up">SEE MORE STATS!📊</a>
        </div>
          {/* <SecSingleCoolFact data={data}/> */}
          <center><img className="justify-content-center" src={multi} alt="Trulli" width="600" height="600" /></center>


      </div>


    </section>
  );
}

export default Multipliers;
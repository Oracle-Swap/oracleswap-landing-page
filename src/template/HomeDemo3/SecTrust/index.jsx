import SectionHeading from '../../../components/SectionHeading'
import SecSingleCoolFact from './SecSingleCoolFact'
import thecards from './thecards.jpg'

const SecTrust = ({ data }) => {

  return (
    <section className="trust-section section-padding-100">

      <SectionHeading
        title='Meet The Oracles!'
        text='The Oracles are messengers from beyond that encourage humanity to utilize decentralized technologies to uplift their civilization. The Oracles believe Blockchains, Digital Assets and Decentralized exchanges can liberate humanity from the corrupt corporations and instutions that control the world. The Oracles are the decentralized keepers of OracleSwap!'
      />

      <div className="container">
        <div className="row">
          {/* <SecSingleCoolFact data={data}/> */}
          <img src={thecards} alt="Trulli" width="1280" height="441" />
          
          <div className='iframe-container' width="1280" height="441">

            <center>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/w4G5BQk-eWY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </center>

          </div>
          <a className="btn dream-btn mt-30" href="https://docs.oracleswap.io/the-oracle-nfts-airdrop/the-oracles-story" data-aos="fade-up">LEARN MORE</a>

        </div>
      </div>
    </section>
  );
}

export default SecTrust;
import SectionHeading from '../../../components/SectionHeading'
import SecSingleCoolFact from './SecSingleCoolFact'
import thecards from './thecards.jpg'

const SecTrust = ({data}) => {

  return (
    <section className="trust-section section-padding-100">

        <SectionHeading
            title='Meet The Oracles!'
            text='Check out how awesome the Oracle NFTs are! Get an NFT and be qualified to receive the $ORACLE Token Airdrop!'
        />

        <div className="container">
            <div className="row">
                {/* <SecSingleCoolFact data={data}/> */}
                <img src={thecards} alt="Trulli" width="1280" height="441" />
            </div>
        </div>
    </section>
  );
}

export default SecTrust;
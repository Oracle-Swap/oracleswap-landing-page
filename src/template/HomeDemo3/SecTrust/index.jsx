import SectionHeading from '../../../components/SectionHeading'
import SecSingleCoolFact from './SecSingleCoolFact'
import thecards from './thecards.jpg'

const SecTrust = ({data}) => {

  return (
    <section className="trust-section section-padding-100">

        <SectionHeading
            title='The Oracle NFTs!'
            text='Check out how awesome the Oracle NFTs are!'
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
import SectionHeading from '../../../components/SectionHeading'
import SingleFAQArea from './SingleFAQArea'
import IcoCounter from './IcoCounter'
import IcoDocs from './IcoDocs'

const SecFAQ_Timeline = ({FQAInfo , DocElementTitle}) => {

  return (
    <section className="faq-timeline-area section-padding-100">
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-7 col-md-12 mb-5">
                    <SectionHeading
                        title='How to Participate in the $ORACLE Token Airdrop?!'
                        text='ONE OF THE LARGEST AIRDROPS ON THE SONGBIRD NETWORK IS COMING! Oracle Swap will go live after the airdrop is complete!'
                    />

                    <div className="dream-faq-area">
                        <div className="panel-group" id="accordionFourLeft" data-aos="fade-up">
                            {FQAInfo && FQAInfo.map((item , key) => (
                                <>
                                    <SingleFAQArea key={key} text={item.text} ID={item.ID} description={item.description} />
                                </>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-5 offset-lg-0 col-md-8 offset-md-2 col-sm-10 offset-sm-1 mt-5">

                    <IcoCounter />

                    {/* <IcoDocs data={DocElementTitle} /> */}
                    
                </div>
            </div>
        </div>
    </section>
  );
}

export default SecFAQ_Timeline;
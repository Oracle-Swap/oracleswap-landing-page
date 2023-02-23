import SectionHeading from './SectionHeading'
import SecGroup from './SecGroup'
import SecTelegramText from './SecTelegramText'
import SecSocialList from './SecSocialList'
// import './SectionHeading.css'

const Disclaimer = ({ data }) => {

    return (
        <section className="container " style={{ paddingBottom: '0px' }} id="start">
            <div className="subscribe">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="subscribe-wrapper">

                            <div className="section-heading text-center" data-aos="fade-up">
                                <h2 className="title-head-subscribe">⚠ DISCLAIMER ⚠</h2>
                                <p className="text-head-subscribe">
                                    If you support this project and participate you will randomly be airdropped free tokens.
                                    These tokens will have no value. Remember, this is not an investment of any kind, you should have no expectations of profit from the work of others.
                                </p>
                            </div>

                            <div className="service-text">

                                {/* <SecGroup />
                            <SecTelegramText />
                            <SecSocialList data={data} /> */}


                            </div>
                        </div>
                    </div>


                </div>

            </div>

            {/* <div className="text-center">
                <a href="https://docs.oracleswap.io/about/smart-contracts" className="button mt-30">SEE THE CODE</a>
            </div> */}



            <br />
            <br />

        </section>
    );
}

export default Disclaimer;
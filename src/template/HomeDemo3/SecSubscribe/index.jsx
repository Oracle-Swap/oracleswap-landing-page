import SectionHeading from './SectionHeading'
import SecGroup from './SecGroup'
import SecTelegramText from './SecTelegramText'
import SecSocialList from './SecSocialList'

const SecSubscribe = ({ data }) => {

    return (
        <section className="container " style={{ paddingBottom: '0px' }} id="start">
            <div className="subscribe">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="subscribe-wrapper">

                            <SectionHeading />
                            <div className="service-text">

                                {/* <SecGroup />
                            <SecTelegramText />
                            <SecSocialList data={data} /> */}


                            </div>
                        </div>
                    </div>


                </div>

            </div>

            <div className="text-center">
                <a href="https://docs.oracleswap.io/" className="button mt-30">SEE THE CODE</a>
            </div>



            <br />
            <br />

        </section>
    );
}

export default SecSubscribe;
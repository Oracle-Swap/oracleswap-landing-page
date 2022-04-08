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
                                    If you support this project and participate in The Oracle Mint, you will be airdropped free tokens.
                                    These tokens will have no value. Remember, this is not an investment of any kind, you should have no expectations of profit from the work of others.
                                    The DEX and Marketplace are already built.
                                    By minting an Oracle NFT you get Oracle Points, these points are not meant to have any monetary value.
                                    Remember, you're not buying Oracle Tokens. Some countries tax their citizens when they receive things of value.
                                    $ORACLE is designed to start with no value, which is ideal. Consult your own legal and financial professionals, as nothing written here should be considered professional advice.
                                    The only thing we know of set to be airdropped for free to the Oracle NFT participants so far is Oracle Dex Token ($ORACLE).
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
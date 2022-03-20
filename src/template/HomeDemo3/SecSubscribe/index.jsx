import SectionHeading from './SectionHeading'
import SecGroup from './SecGroup'
import SecTelegramText from './SecTelegramText'
import SecSocialList from './SecSocialList'

const SecSubscribe = ({data}) => {

  return (
    <section className="container " style={{paddingBottom: '0px'}} id="start">
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
        <a href="https://mint.oracleswap.io/" className="btn dream-btn d-flex justify-content-center" >SEE THE CODE</a>

        <br/>
        <br/>

    </section>
  );
}

export default SecSubscribe;
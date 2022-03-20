import SectionHeading from '../../../components/SectionHeading'
import TokenInfo from './TokenInfo'

const SecDistribution = ({img , data}) => {

  return (
    <section className="token-distribution">
        <div className="container">
            
            <SectionHeading
                title='Tokenomics'
                text='The ORACLE token is designed to be distributed to the Songbird Community'
            />

            <div className="col-lg-6 col-md-6 col-sm-12">
                <h2 className="text-center mb-30">Token Allocation</h2>
                <div className="token-allocation">
                    <img src={img} className="center-block" alt="" />
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="token-info-wapper"></div>
                <h2 className="text-center mb-30">Airdrop Distribution</h2>
                {data && data.map((item , key) => (
                    <TokenInfo
                        key={key}
                        text={item.text}
                        // img={item.img}
                    />
                ))}
            </div>
        </div>
        
    </section>
  );
}

export default SecDistribution;
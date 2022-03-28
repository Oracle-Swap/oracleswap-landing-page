import SectionHeading from '../../../components/SectionHeading'
import Content from './Content'

const SecOurServices = ({data}) => {

  return (
    <section className="our_services_area section-padding-100-70 clearfix" id="offerings">
        <div className="container">
            
            <SectionHeading
                title='Oracle Swap Offerings'
                text='Oracle Swap provides a variety of DeFi and NFT functionality on the Songbird Network'
            />
                

            <div className="row">
                {data && data.map((item , key) => (
                    <Content
                        key={key}
                        img={item.img}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    </section>
  );
}

export default SecOurServices;
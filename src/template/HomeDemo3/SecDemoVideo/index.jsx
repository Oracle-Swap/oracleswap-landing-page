import SectionHeading from '../../../components/SectionHeading'
import SecVideoArea from './SecVideoArea'

const SecDemoVideo = ({img}) => {

  return (
    <section className="demo-video section-before section-padding-100" id="about">
        <div className="container">
	        <SectionHeading
	            title='Introducing Oracle Swap!'
	            text='Oracle Swap, The Premiere DEX on the Songbird & Flare Network'
	        />
            <SecVideoArea img={img} />
            <br/>
        </div>
    </section>
  );
}

export default SecDemoVideo;
import SectionHeading from '../../../components/SectionHeading'
import SecVideoArea from './SecVideoArea'

const SecDemoVideo = ({img}) => {

  return (
    <section className="demo-video section-before section-padding-100">
        <div className="container">
	        <SectionHeading
	            title='Welcome To Oracle Swap!'
	            text='Oracle Swap, The Premiere DEX on the Songbird & Flarenetwork'
	        />
            <SecVideoArea img={img} />
        </div>
    </section>
  );
}

export default SecDemoVideo;
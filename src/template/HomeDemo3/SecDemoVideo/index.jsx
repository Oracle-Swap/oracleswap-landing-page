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
            {/* <SecVideoArea img={img} /> */}
           

            
            <br/>
        <div className='iframe-container' width="1280" height="441">
            
            <center>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLz2GkzTtPX5k0aVBX9w_ztYhPNXCXs9vH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </center>

        </div>
        </div>
    </section>
  );
}

export default SecDemoVideo;
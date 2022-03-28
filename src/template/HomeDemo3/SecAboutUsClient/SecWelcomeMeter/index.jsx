import CountUp from 'react-countup';
import airdrop from './airdrop.png'


const SecWelcomeMeter = ({img}) => {

  return (
    <div className="col-12 col-lg-6" data-aos="fade-up">
        <div className="welcome-meter">
            <img src={airdrop} className="img-responsive center-block" alt="" />
            <div className="growing-company text-center mt-30">
                <p>* Airdropping to <span className="counter"><CountUp start={0} end={3000} duration={20}/> </span>+</p>
            </div>
        </div>
    </div>
  );
}

export default SecWelcomeMeter;
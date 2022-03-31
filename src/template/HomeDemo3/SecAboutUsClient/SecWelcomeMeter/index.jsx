import CountUp from 'react-countup';
import airdrop from './airdrop.png'


const SecWelcomeMeter = ({img}) => {

  return (
    <div className="col-12 col-lg-6" data-aos="fade-up">
        <div className="welcome-meter">
            <img src={airdrop} className="img-responsive center-block" alt="" />
            <div className="growing-company text-center mt-30">
                <p>* Airdropping <span className="counter"><CountUp start={1000000} end={100000000} duration={10}/> </span>+ Tokens!</p>
            </div>
        </div>
    </div>
  );
}

export default SecWelcomeMeter;
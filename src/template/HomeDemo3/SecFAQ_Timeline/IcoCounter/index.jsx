import { useEffect } from "react"
import { SlideCountdown } from 'react-fancy-countdown';
import { Line } from 'rc-progress';

const IcoCounter = () => {

    // useEffect(() => {
    //   let PathProgs = document.querySelector('.rc-progress-line-trail')
    //   PathProgs.setAttribute('stroke' , "transparent")
    // },[])

    return (
        <div className="ico-counter">
            <div className="counter-down">

                <div className="content">
                    <div className="conuter-header">
                        <h3 className="text-center mb-30">ORACLE MINT PHASE STARTS SOON</h3>
                    </div>
                    <div className="counterdown-content">

                        <div className="count-down titled circled text-center">
                            <SlideCountdown
                                weeks={false}
                                deadline="2022-5-05 17:00:00" />
                        </div>
                        {/* <div className="ico-progress">
                       <ul className="list-unstyled list-percent list-inline clearfix mb-10">
                          <li className="title">33m</li>
                          <li className="strength">75m</li>
                       </ul>
                       <div className="current-progress">
                          <Line percent="70" trailWidth="3" strokeWidth="4" strokeColor="#C0C0C0" />
                       </div>
                       <span className="pull-left">Softcap in 103 days</span>
                       <span className="pull-right">Token Hardcap</span>
                    </div> */}


                        <div className="text-center">
                            <div className="conuter-header">
                                <br />
                                <h3 className="text-center">STARTING COST TO MINT: 1111 SGB</h3>
                                <p className="text-center">Bonding Curve 📈: The cost to mint an Oracle increases by 5% everyday after the first 5 days of the mint.</p>

                            </div>
                            <a href className="button mt-30">COMING SOON!</a>

                        </div>


                    </div>

                </div>

            </div>
        </div>
    );
}

export default IcoCounter;
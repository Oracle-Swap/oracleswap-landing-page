import {useEffect}  from "react";
import './style/HomeDemo3.scss'

import {
          VerticalSocial,
          HowItWorksInfo,
          SingleCoolFact,
          service_single_content,
          timelineInfo,
          ServiceBlock,
          SocialListIco,
          FQAInfo,
          DocElementTitle,
          TokenText,
          TeamMember,
          PartnersData
       } from '../../data/data-containers/data-HomeDemo3.js';

import {
          HomeDemo3About1,
          HomeDemo3Solution,
          HomeDemo3VideoBg4,
          HomeDemo3ImgPhone,
          HomeDemo3RingsBg,
          HomeDemo3Allocation,
          HomeDemo3BgRoadmap
        } from '../../utils/allImgs'

import {handelTitle} from '../../utils'
import Header from "../../layouts/Header"
import Footer from '../../layouts/FooterPages'

import SecWelcomeArea from './SecWelcomeArea'
import SecVerticalSocial from './SecVerticalSocial'
import SecHowItWorks from './SecHowItWorks'
import SecTrust from './SecTrust'
import SecAboutUsClient from './SecAboutUsClient'
import SecAboutUs from './SecAboutUs'
import SecDemoVideo from './SecDemoVideo'
import SecOurServices from './SecOurServices'
import SecOurRoadmap from './SecOurRoadmap'
import SecOurFeatures from './SecOurFeatures'
import SecSubscribe from './SecSubscribe'
import SecFAQ_Timeline from './SecFAQ_Timeline'
import SecDistribution from './SecDistribution'
import SecTeam from './SecTeam'
import SecPartners from './SecPartners'
import Multipliers from './SecTrust/Multipliers'
import Benefits from './SecTrust/Benefits'
import Disclaimer from './SecSubscribe/Disclaimer'





let HomeDemo3 = () => {

  useEffect(() => {
    handelTitle('Oracle Swap')
  },[])

  useEffect(() => {
    if (document.title === 'Oracle Swap') {
      document.getElementsByTagName("body")[0].style.backgroundImage = 'linear-gradient(180deg,#240044 0,#0f0240 25%,#400959 40%,#0f0240 65%,#0f0240)'
    }else{
      document.getElementsByTagName("body")[0].style.backgroundImage = 'linear-gradient(to right, #C0C0C0, #341f97)'
    }
  },[])

  return (
    <>
      <Header />
      <div className="HomeDemo3">
        <SecWelcomeArea />
        <SecVerticalSocial data={VerticalSocial} />
        <SecFAQ_Timeline FQAInfo={FQAInfo} DocElementTitle={DocElementTitle} />
        <SecHowItWorks data={HowItWorksInfo} imgPhone={HomeDemo3ImgPhone} />
        <SecTrust data={SingleCoolFact} />
        <SecAboutUsClient img={HomeDemo3About1} />
        <Multipliers />
        {/* <Benefits /> */}
        <SecDemoVideo img={HomeDemo3VideoBg4} />
        <SecAboutUs img={HomeDemo3Solution} />
        <div className="clearfix" />
        <SecOurServices data={service_single_content} />
        <SecOurFeatures data={ServiceBlock} imgPhone={HomeDemo3ImgPhone} Rings={HomeDemo3RingsBg} />
        <SecSubscribe data={SocialListIco} />
        <SecDistribution img={HomeDemo3Allocation} data={TokenText} />
        <SecOurRoadmap data={timelineInfo} img={HomeDemo3BgRoadmap} />
        <SecTeam data={TeamMember} />
        <Disclaimer />

        {/* <SecPartners data={PartnersData} /> */}
          			

      </div>
      <Footer />
    </>
  );
};

export default HomeDemo3
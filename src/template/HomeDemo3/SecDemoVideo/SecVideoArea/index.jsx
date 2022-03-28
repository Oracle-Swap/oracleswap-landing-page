const SecVideoArea = ({img}) => {

  return (
    <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12" data-aos="fade-up">
        <div className="welcome-video-area">
            <div className="welcome-thumb">
                <img src={img} alt="" />
            </div>
            <div className="video-icon">
            <a  onClick={{}} href="https://www.youtube.com/watch?v=sJlZMbB8o5Y" target="_blank"
                    className="btn dream-btn video-btn"
                    id="videobtn">
                    <i className="fa fa-play"></i>
                </a>
            
            {/* <iframe width="auto" height="auto" src="https://www.youtube.com/embed/sJlZMbB8o5Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            
            </div>
        </div>
    </div>
  );
}

export default SecVideoArea;
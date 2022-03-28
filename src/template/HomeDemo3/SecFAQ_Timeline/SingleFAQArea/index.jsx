
const SingleFAQArea = ({text , ID, description}) => {

  return (
  	<>
	    <dt className="wave" data-toggle="collapse" data-target={`#${ID}`}>{text}</dt>
	    <dd data-aos="fade-up" id={ID} className="collapse">
	        <p>{description}</p>
	    </dd>

  	</>
  );
}

export default SingleFAQArea;
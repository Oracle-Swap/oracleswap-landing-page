const Span = () => <span></span>

const SecWhoWeContant = () => {

  return (
    <div className="col-12 col-lg-6">
      <div className="who-we-contant">
        <h4 data-aos="fade-up">Oracle Swaps Advantages</h4>
        <div className="dream-dots" data-aos="fade-up">
          {Array(7).fill().map((key) => (
            <Span />
          ))}
        </div>
        <h4 data-aos="fade-up">Make swaps almost instantly!</h4>
        <p data-aos="fade-up">The transactions per second of the Songbird Network allows you to make swaps quickly and efficiently!</p>
        <h4 data-aos="fade-up">Make swaps for pennies!</h4>
        <p data-aos="fade-up">The low gas fees on the Songbird Network allows you to makes swaps for cheap!</p>
        <a className="btn dream-btn mt-30" href="https://beta.oracleswap.io/" data-aos="fade-up">Try It!</a>
      </div>
    </div>
  );
}

export default SecWhoWeContant;
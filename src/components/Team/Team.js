


function Team() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6">
            <h5>OUR TEAM</h5>
            <h1>Choose A Plan That's Right For You</h1>
        </div>
        <div className="col-6">
            <button>Monthly || Yearly</button>    
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-4">
            <div className="card">
                <div className="card-body text-center">
                    <h5 className="card-title">Basic Plan</h5>
                    <img scr="" alt="" />
                    <p><span>$50</span>/Month</p>
                    <a href="">Graphic Design</a> <br />
                    <a href="">Web Design</a> <br />
                    <a href="">UI/UX</a> <br />
                    <a href="">HTML/CSS</a> <br />
                    <a href="">SEO Marketing</a> <br />
                    <a href="">Business Analysis</a> <br /> <br />
                    <button>Start Now</button> <br />
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card">
                <div className="card-body text-center">
                    <h5 className="card-title">Standart Plan</h5>
                    <img scr="" alt="" />
                    <p><span>$99</span>/Month</p>
                    <a href="">Graphic Design</a> <br />
                    <a href="">Web Design</a> <br />
                    <a href="">UI/UX</a> <br />
                    <a href="">HTML/CSS</a> <br />
                    <a href="">SEO Marketing</a> <br />
                    <a href="">Business Analysis</a> <br /> <br />
                    <button>Start Now</button> <br />
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card">
                <div className="card-body text-center">
                    <h5 className="card-title">Premium Plan</h5>
                    <img scr="" alt="" />
                    <p><span>$150</span>/Month</p>
                    <a href="">Graphic Design</a> <br />
                    <a href="">Web Design</a> <br />
                    <a href="">UI/UX</a> <br />
                    <a href="">HTML/CSS</a> <br />
                    <a href="">SEO Marketing</a> <br />
                    <a href="">Business Analysis</a> <br /> <br />
                    <button>Start Now</button> <br />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Team;

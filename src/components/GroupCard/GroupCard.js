import './GroupCard.css'
import smart from '../../images/smart.jpg'
import partnership from '../../images/partnership.png'
import idea from '../../images/ideas.jpg'

function GroupCard() {
  return (
    <div className="container-fluid card-fluid">
          <div className="container card-fluid">
      <div className="row">
        <div className="col-md-4">
          <div className="card group-card">
            <div className="card-body text-center">
            <img src={smart} className="group-card-img" alt="" />
              <h5 className="card-titlle mt-3">Smart Planing</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card group-card">
            <div className="card-body text-center">
            <img src={partnership} className="group-card-img" alt="" />
              <h5 className="card-titlle mt-3">Our partnership</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card group-card">
            <div className="card-body text-center">
            <img src={idea} className="group-card-img" alt="" />
              <h5 className="card-titlle mt-3">Super ideas</h5>
              <p className="card-text">
                There are many variations of passages available, but the
                majority have suffered alteration in some form,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default GroupCard;

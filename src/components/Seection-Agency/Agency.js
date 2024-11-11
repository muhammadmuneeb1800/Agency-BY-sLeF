import Header from '..//Header/Header';
import logo from '../../images/main_logo-removebg-removebg-preview.png'
import './Agency.css'

function Agency() {
  return (
    <>
    <div className="container-fluid first">
    <Header/>
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12 mt-5">
         <p class='heading'>Creative Digital Agency</p>
         <p className='section-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.</p>
         <button className='section-btn'>Learn More</button>
        </div>
        <div className="col-md-6 col-sm-12 mt-5">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Agency;
import './Services.css';
import web from '../../images/makewebsiteguide-removebg-preview.png';
import graphic from '../../images/images__1_-removebg-preview.png' 
import marketing from '../../images/How-to-Learn-Digital-Marketing.jpg.optimal-removebg-preview.png'

function Services () {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-12">
                <center>
                <a href="" className='service-p'>OUR SERVICES</a>
                    <h1 className='service-heading'>We Are Providing Digital services</h1>
                </center>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-4">
                    <div className='card service-card'>
                        <div className='card-body text-center'>
                            <img src={web} className='s-card-img1' alt="" />
                            <h5 className='card-title mt-1'>Web Development</h5>
                            <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className='card service-card'> 
                        <div className='card-body text-center'>
                        <img src={graphic} className='s-card-img2' alt="" />
                            <h5 className='card-title mt-4'>Graphic Design</h5>
                            <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className='card service-card'>
                        <div className='card-body text-center'>
                        <img src={marketing} className='s-card-img3' alt="" />
                            <h5 className='card-title mt-1'>Digital Marketing</h5>
                            <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
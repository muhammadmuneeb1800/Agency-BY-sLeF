import './About.css'
import project from '../../images/project.png'

function About() {
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col-md-6 col-sm-12 aa">
          <img src={project} className="" alt="" />
        </div>
        <div className="col-md-6 col-sm-12 aa">
          <a href='' className='about-a'>ABOUT US</a>
          <h1 className='about-h1'>We design, build brands & digital projects.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. <br /><br /> Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident,
          </p>
         <button className='about-btn'>Read More</button>
        </div>
      </div>
    </div>
  );
}


export default About;
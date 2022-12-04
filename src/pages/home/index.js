import React from 'react'
import icon from '../../resources/images/icon.png'
import bg from '../../resources/images/bg.png'
import d1 from '../../resources/icons/1.png'
import d2 from '../../resources/icons/2.png'
import d3 from '../../resources/icons/3.png'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className='w-full'>
      <div className="home-body vh-100">
        <div className="vh-100">
          <div className="w-100">
            <div className="container px-lg-5">
              <div className="row pt-5">
                <div className="col-md-6">
                  <div className="pt-md-5 space-y-2">
                    <div className="animate-opacity">
                      <p className="fs-1 fw-bold text-white d-flex space-x-2">
                        <span><img alt="..." src={icon} className="image-fluid md:pt-2.5" width="40px" /></span>
                        <span><span className="text-info">W</span><i>alletauth</i></span>
                      </p>
                    </div>
                    <div className="animate-left text-light">
                      <p className="fs-2 ff-lobster">The Fastest, <br />Safest, most Reliable <br />Cryptocurrency wallet authenticator.</p>
                      <p className="fs-5">authenticate your crypto wallet the simplest and easiest way.</p>
                      <Link className="btn btn-info text-light btn-lg my-3 px-5" to="/auth">Authenticate <i className="ps-2 fa fa-angle-right"></i></Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-none d-md-block">
                  <div className="pt-5">
                    <div className="animate-right">
                      <img alt="..." src={bg} className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row pt-2 animate-bottom">
                <div className="col-4 text-center">
                  <div className="card border-0 bg-transparent animate-left">
                    <div className="text-center">
                      <img alt="crypto" src={d1} className="img-fluid mx-auto w-[60px] md:w-[100px]" />
                      <p className="text-light px-0 m-0 lh-1">compatible with any wallet type</p>
                    </div>
                  </div>
                </div>
                <div className="col-4 text-center">
                  <div className="card border-0 bg-transparent animate-opacity">
                    <div className="text-center">
                      <img alt="crypto" src={d2} className="img-fluid mx-auto w-[60px] md:w-[100px]" />
                      <p className="text-light px-0 m-0 lh-1">server side data transfer</p>
                    </div>
                  </div>
                </div>
                <div className="col-4 text-center">
                  <div className="card border-0 bg-transparent animate-right">
                    <div className="text-center">
                      <img alt="crypto" src={d3} className="img-fluid mx-auto w-[60px] md:w-[100px]" />
                      <p className="text-light px-0 m-0 lh-1">end to end secured data transfer</p>
                    </div>
                  </div>
                </div>
              </div>


            </div>

            <div className="w-100 d-none d-md-block">
              <div className="position-absolute bottom-0 start-50 end-0 translate-middle-x">
                <hr className="bg-light" />
                <div className="animate-zoom text-center text-light py-2">
                  <span>Copyright <i className="fa fa-copyright"></i> <span id="date">{new Date().getFullYear()}</span> Walletauth</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HomePage
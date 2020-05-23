import React from "react";

const Home = () =>{
    return (
        <div className="container">
            <h1 className="display-5 text-uppercase py-5 text-center">
                Welcome
            </h1>
            <p>lof 3bternwhn wnwrt mue6m5iyuemer n twtneatn tnawt etnaertgn tnharet ntnrwtgtyn tnWSRT ewtnWES ebSEDtnsnstnstzNSE enwnstr tntwnws twntnw wtnsnfw </p>

            <div className="form-box">
                <h3 className="display-6 text-uppercase text-center py-3">
                    register
                </h3>
                <form>
                    <div className="form-row mr-auto">
                        <div className="col-md-6 mb-4">
                            <input type="text" className="form-control" placeholder="First Name"/>
                        </div>
                        <div className="col-md-6 mb-4">
                            <input type="text" className="form-control" placeholder="Last Name"/>
                        </div>
                        <div className="col-md-6 mb-4">
                            <input type="text" className="form-control" placeholder="phone"/>
                        </div>
                        <div className="col-md-6 mb-4">
                            <input type="text" className="form-control" placeholder=" email"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Home;

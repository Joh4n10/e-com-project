import React from 'react';
import '../../App.css';
import './footer.css';

export class Footer extends React.Component {

    constructor(props) {
        super()
        console.log(props);

    }



    render() {
        return (
            <>
                <section id="footer">
                    <div className="container">
                        <div className="row text-center text-xs-center text-sm-left text-md-left">
                            <div className="col-xs-12 col-sm-4 col-md-4">
                                <h5>Informacione</h5>
                                <ul className="list-unstyled quick-links">
                                    <li><a href="../"><i className="fa fa-angle-double-right"></i>Home</a></li>
                                    <li><a href="urban"><i className="fa fa-angle-double-right"></i>Transport Urban</a></li>
                                    <li><a href="inter-urban"><i className="fa fa-angle-double-right"></i>Transport Interurban</a></li>
                                    {/* <li><a href="test"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
                                    <li><a href="test"><i className="fa fa-angle-double-right"></i>Videos</a></li> */}

                                </ul>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-4">
                                <h5>Kontaktet</h5>
                                <ul className="list-unstyled quick-links">
                                    <li><a href="mailto:support@busticket.al"><i className="fa fa-angle-double-right"></i>support@busticket.al</a></li>
                                    <li><a><i className="fa fa-angle-double-right"></i>+355 69 000 0000</a></li>
                                    <li><a><i className="fa fa-angle-double-right"></i>+355 68 111 0000</a></li>

                                    {/* <li><a href="test"><i className="fa fa-angle-double-right"></i>Home</a></li>
                                    <li><a href="test"><i className="fa fa-angle-double-right"></i>About</a></li>
                                    <li><a href="test"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
                                    <li><a href="test"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
                                    <li><a href="test"><i className="fa fa-angle-double-right"></i>Videos</a></li> */}
                                </ul>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-4">
                                <h5>Partneret</h5>
                                <ul className="list-unstyled quick-links">
                                    <li><a><i className="fa fa-angle-double-right"></i>Alb - Trans sh.p.k</a></li>
                                    <li><a><i className="fa fa-angle-double-right"></i>AlbaTrans</a></li>
                                    <li><a><i className="fa fa-angle-double-right"></i>Tirana Metropol</a></li>
                                   
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                            <img alt="as" src={require('../../Assets/bus.png')} style={{ width: "8%" }} />
</div>
                            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                                <ul className="list-unstyled list-inline social text-center">
                                    <li className="list-inline-item"><a href="test"><i className="fa fa-facebook"></i></a></li>
                                    <li className="list-inline-item"><a href="test"><i className="fa fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="test"><i className="fa fa-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="test"><i className="fa fa-google-plus"></i></a></li>
                                    <li className="list-inline-item"><a href="test" target="_blank"><i className="fa fa-envelope"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                                <p><u><a href="/">busticket.al</a></u> - Projekt i krijuar nga studente te UAMD - FTI per qellime akademike ne kursin E-COMMERCE & E-BUSINESS</p>
                                <p className="h6">All right Reversed.<a className="text-green ml-2" href="" target="_blank"></a><p>Johan Dhana & Erblin Isaku</p></p>
                            </div>
                        </div>
                    </div>
                </section >
            </>
        )

    }


}


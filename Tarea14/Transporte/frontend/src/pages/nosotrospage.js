import '../styles/components/pages/nosotrospage.css';

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="staff">
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="img/nosotros/nosotros1.jpg" alt="Juan Gomez" />
                        <h5>Juan Gomez</h5>
                        <h6>Gerente General</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            aboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="persona">
                        <img src="img/nosotros/nosotros2.jpg" alt="Marta Gomez" />
                        <h5>Marta Gomez</h5>
                        <h6>Gerente RRHH</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            aboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="persona">
                        <img src="img/nosotros/nosotros3.jpg" alt="Jorge Gomez" />
                        <h5>Jorge Gomez</h5>
                        <h6>Gerente Comercio</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            aboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="persona">
                        <img src="img/nosotros/nosotros4.jpg" alt="Yessica Gomez" />
                        <h5>Yessica Gomez</h5>
                        <h6>Gerente Sistemas</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            aboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="persona">
                        <img src="img/nosotros/nosotros5.jpg" alt="Carlos Gomez" />
                        <h5>Carlos Gomez</h5>
                        <h6>Gerente Marketing</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            aboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default NosotrosPage;
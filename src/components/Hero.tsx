import './css/hero.css';

export default function Hero() {
    return (
        <section className="container-fluid p-0 m-0">
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2500">
                <div className="carousel-inner hero_slide">
                    <div className="carousel-item active">
                        <img src="/demo1.png" className="d-block w-100 hero_img" alt="First slide" />
                        <div className="carousel-caption">
                            <h1>Labor Supply</h1>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/demo2.png" className="d-block w-100 hero_img" alt="Second slide" />
                        <div className="carousel-caption">
                            <h1>International Recruitment</h1>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/demo3.png" className="d-block w-100 hero_img" alt="Third slide" />
                        <div className="carousel-caption">
                            <h1>Customized Workforce Solutions</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero_text d-flex justify-content-center p-2">
                <p className='text-center fs-2'>"Empowering Global Industries with Quality Workforce Solutions."</p>
            </div>
        </section>
    );
}
import './css/services.css'

export default function Services() {
    return (
        <section className="container">
            <h1 className="text-center">Services</h1>
            <hr />
            <p className="fs-4 text-center">Comprehensive Manpower Solutions Tailored for Global Needs</p>
            <div className="row gap-2 justify-content-around">
                <div className="col-xl-5 col-md-5 col-sm-12 border-1 rounded border p-0">
                    <div className="d-flex card_container">
                        <img src="/rss/skilled.jpg" className="h-100 rounded-start" alt="" />
                        <div className="card border-0" >
                            <div className="card-body text-center">
                                <h5 className="card-title">Skilled Labor Supply</h5>
                                <p className="card-text">
                                    "We specialize in sourcing highly skilled professionals for sectors like construction, manufacturing, engineering, and more. Each candidate undergoes rigorous screening to meet industry standards."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 border-1 rounded border p-0">
                    <div className="d-flex card_container">
                        <div className="card border-0" >
                            <div className="card-body text-center">
                                <h5 className="card-title">Skilled Labor Supply</h5>
                                <p className="card-text">
                                    "We specialize in sourcing highly skilled professionals for sectors like construction, manufacturing, engineering, and more. Each candidate undergoes rigorous screening to meet industry standards."
                                </p>
                            </div>
                        </div>
                        <img src="/rss/skilled.jpg" className="h-100 rounded-end" alt="" />
                    </div>
                </div>
                <div className="col-md-5 border-1 rounded border p-0">
                    <div className="d-flex card_container">
                        <img src="/rss/skilled.jpg" className="h-100 rounded-start" alt="" />
                        <div className="card border-0" >
                            <div className="card-body text-center">
                                <h5 className="card-title">Skilled Labor Supply</h5>
                                <p className="card-text">
                                    "We specialize in sourcing highly skilled professionals for sectors like construction, manufacturing, engineering, and more. Each candidate undergoes rigorous screening to meet industry standards."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 border-1 rounded border p-0">
                    <div className="d-flex card_container">
                        <div className="card border-0" >
                            <div className="card-body text-center">
                                <h5 className="card-title">Skilled Labor Supply</h5>
                                <p className="card-text">
                                    "We specialize in sourcing highly skilled professionals for sectors like construction, manufacturing, engineering, and more. Each candidate undergoes rigorous screening to meet industry standards."
                                </p>
                            </div>
                        </div>
                        <img src="/rss/skilled.jpg" className="h-100 rounded-end" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
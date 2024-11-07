import { useEffect, useState } from 'react'
import './css/services.css'
import ServiceCardOne from './service_cards/ServiceCardOne'
import ServiceCardTwo from './service_cards/ServiceCardTwo'

function dispalySize() {
    const [size, setSize] = useState({
        width: window.innerWidth,
        hight: window.innerHeight
    })

    useEffect(() => {
        const handelSize = () => {
            setSize({
                width: window.innerWidth,
                hight: window.innerHeight
            })
        }

        window.addEventListener('resize', handelSize);
        return () => {
            window.removeEventListener('resize', handelSize)
        }
    }, [])
    return size
}

export default function Services() {
    const screenSize = dispalySize()

    return (
        <section className="container">
            <h1 className="text-center">Services</h1>
            <hr />
            <p className="fs-4 text-center">Comprehensive Manpower Solutions Tailored for Global Needs</p>
            <div className="row">
                <div className="col-md-6">
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <ServiceCardOne 
                                    title = "Skilled Labor Supply:"
                                    description = '"We specialize in sourcing highly skilled professionals for sectors like construction, manufacturing, engineering, and more. Each candidate undergoes rigorous screening to meet industry standards."'
                                    imgPath = '/demo1.png'
                                />
                            </div>
                        </div>
                </div>
                <div className="col-md-6">
                        <div className="card mb-3" >
                            <div className="row g-0">
                                {screenSize.width <= 767 ?
                                    <ServiceCardOne
                                        title = "Unskilled Labor Supply:"
                                        description = '"Our extensive network allows us to quickly meet demands for unskilled labor, providing dedicated and hardworking individuals who bring efficiency and productivity to every project."'
                                        imgPath = '/demo2.png'
                                    />
                                    :
                                    <ServiceCardTwo
                                        title = "Unskilled Labor Supply:"
                                        description = '"Our extensive network allows us to quickly meet demands for unskilled labor, providing dedicated and hardworking individuals who bring efficiency and productivity to every project."'
                                        imgPath = '/demo2.png'
                                    />
                                }
                            </div>
                        </div>
                </div>
                <div className="col-md-6">
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <ServiceCardOne 
                                    title = "International Recruitment"
                                    description = '"We connect employers across various countries with qualified candidates, managing everything from hiring to visa processing, ensuring a smooth international placement experience."'
                                    imgPath = '/demo3.png'
                                />
                            </div>
                        </div>
                </div>
                <div className="col-md-6">
                        <div className="card mb-3" >
                            <div className="row g-0">
                                {screenSize.width <= 767 ?
                                    <ServiceCardOne 
                                        title = "Customized Workforce Solutions:"
                                        description = '"Our expert team works closely with each client to provide customized solutions that match their specific needs, ensuring flexibility, efficiency, and timely deployment of manpower."'
                                        imgPath = '/demo1.png'
                                    />
                                    :
                                    <ServiceCardTwo
                                        title = "Customized Workforce Solutions:"
                                        description = '"Our expert team works closely with each client to provide customized solutions that match their specific needs, ensuring flexibility, efficiency, and timely deployment of manpower."'
                                        imgPath = '/demo1.png'
                                    />
                                }
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}
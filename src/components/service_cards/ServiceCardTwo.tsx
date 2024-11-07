import { useState } from "react"

export default function ServiceCardTwo(props: any) {

    const [data] = useState({
        title: props.title,
        description: props.description,
        imgPath: props.imgPath
    })
    return(
        <>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">
                        {data.description}
                    </p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="col-md-4">
                <img src="/public/demo2.png" className="object-fit-cover img-fluid rounded h-100" alt="..." />
            </div>
        </>
    )
}
import { useState } from "react"

export default function ServiceCardOne(props: any) {

    const [data] = useState({
        title: props.title,
        description: props.description,
        imgPath: props.imgPath
    })
    console.log(data)
    return(
        <>
            <div className="col-md-4">
                <img src={data.imgPath} className="object-fit-cover img-fluid rounded h-100" alt="..." />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">
                        {data.description}
                    </p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </>
    )
}
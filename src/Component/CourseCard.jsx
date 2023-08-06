/* eslint-disable react/prop-types */


export default function CourseCard({imgUrl,title,about}) {
    return (
        <>
            <div className="card mb-4" style={{width: "24rem"}}>
                <img src={imgUrl} className="card-img-top bg-danger" alt="..." />
                <div className="card-body">
                    <h6 className="cardh6 p-2">FREE COURSE</h6>
                    <h5 className="card-title p-2 ">{title}</h5>
                    <p className="card-text p-2 mb-5  ">{about}</p>
                    <div className="btncontainer">
                    <a href="#" className="btn bg-color-700 mx-3 cardBtn ">Start Watching</a>
                    </div>
                </div>
            </div>
        </>
    )
}
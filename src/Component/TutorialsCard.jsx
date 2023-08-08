// import { useNavigate,NavLink } from "react-router-dom"

export default function TutorialsCard({imgUrl,title,nav}) {
    // const navigate = useNavigate()
    return (
        <div className=" m-4">
            <div className="card shadow" style={{width: "18rem"}}>
                <img src={imgUrl} className=" mt-4 tutorialCardImg card-img-top" alt="error" />
                <div className="card-body text-center">
                    <h5 className="card-title mb-4">{title}</h5>
                    <button className="bg-color-700  tutorialinsidbtn  btn cardBtn" >{nav}</button>
                    {/* <button className="bg-color-700 aligncenter  btn cardBtn" onClick={()=>navigate(`/tutorial/${nav}`)}>{nav}</button> */}
                </div>
            </div>
        </div>
    )
}
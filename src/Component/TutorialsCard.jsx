// import { useNavigate,NavLink } from "react-router-dom"

export default function TutorialsCard({imgUrl,title,nav,des,notes}) {
    // const navigate = useNavigate()
    return (
        <div className=" m-4">
            <div className="card shadow-sm borderr" style={{width: "18rem"}}>
                <img src={imgUrl} className=" mt-4 tutorialCardImg card-img-top" alt="error" />
                <div className="card-body text-center">
                    <h5 className="card-title mb-4">{title}</h5>
                    {notes===true?<p className="notesPara">{des}</p>:""}
                    {notes===true?<button className="bg-color-700 aligncenter tutorialinsidbtn  btn cardBtn mb-2" >PDF Notes</button>:<button className="bg-color-700 aligncenter tutorialinsidbtn  btn cardBtn mb-2" >Start Learning!</button>}
                    {notes===true?<button className="bg-color-700 aligncenter tutorialinsidbtn  btn cardBtn" >Chapterwise Notes</button>:""}
                    {/* <button className="bg-color-700 aligncenter  btn cardBtn" onClick={()=>navigate(`/tutorial/${nav}`)}>{nav}</button> */}
                </div>
            </div>
        </div>
    )
}
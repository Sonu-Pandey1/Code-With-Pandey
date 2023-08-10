// import { useNavigate,NavLink } from "react-router-dom"

import Pdf from "./Pdf";

export default function TutorialsCard({imgUrl,title,nav,des,notes,mode3,mode4}) {
    // const navigate = useNavigate()
    return (
        <div className=" m-4">
            <div className="card shadow-sm borderr" style={{width: "18rem"}}>
                <img src={imgUrl} className={`${mode3||mode4===true?"courseCardswhite":""} tutorialCardImg card-img-top`} alt="error" />
                <div className={`card-body text-center ${mode3||mode4===true?"courseCardswhite":""} `}>
                    <h5 className={`card-title mb-4 text-${mode3||mode4===true?"light":""}`}>{title}</h5>
                    {notes===true?<p className="notesPara">{des}</p>:""}
                    {notes===true?<button className=" bg-color-700 aligncenter tutorialinsidbtn  btn cardBtn mb-2" ><Pdf/></button>:<button className="bg-color-700 aligncenter tutorialinsidbtn  btn cardBtn mb-2" >{nav}</button>}
                    {notes===true?<button className="bg-color-700 aligncenter tutorialinsidbtn  btn m cardBtn" >Chapterwise Notes</button>:""}
                    {/* <button className="bg-color-700 aligncenter  btn cardBtn" onClick={()=>navigate(`/tutorial/${nav}`)}>{nav}</button> */}
                </div>
            </div>
        </div>
    )
}
import { NavLink, useNavigate } from "react-router-dom"

export default function CourseCard({imgUrl,title,about,style,mode,mode2}) {
    const navigate = useNavigate()
    return (
        <>
            <div className={`card m-auto mb-4 ${mode===true?"courseCardswhite":""} shadow style${style===true?"2":"1"}`}  >
                {style===true?<img src={imgUrl} className="card-img-top img-fluid img-thumbnail testomonialImgs m-auto" alt="error" />:<img src={imgUrl} className="card-img-top img-fluid img-thumbnail rounded-4" alt="error" />}
                <div className="card-body">
                    {style===true?"":<h6 className={`cardh6 p-2 ${mode===true?"courseCardswhitenot":""} `}>FREE COURSE</h6>}
                    <h5 className={`card-title text-${mode===true?"light":""} testomonialh5margintop p-2 text-${style===true?"center":""}`}>{title}</h5>
                    {style===true?<h6 className="cardh6 p-2 text-center mb-2">Student</h6>:""}
                    <p className={`card-text ${mode===true?"courseCardswhitenot":""}  p-2 text-${style===true?"center":""}`}>{about}</p>
                    <div className="btncontainer">
                    {style===true?"":<button className="bg-color-700 mx-3 btn cardBtn" onClick={()=>navigate("/tutorial")} >Start Watching</button>}
                    
                    </div>
                </div>
            </div>
        </>
    )
}
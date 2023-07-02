import { DataContext } from "../App"
import { useContext } from "react"
import QuestionsData from "../data/QuestionsData"

const Score = ()=>{
    const {score,setAppState,setScore} =useContext(DataContext)
        const restartApp=()=>{
            setScore(0)
            setAppState("menu")

        }


    return(
        <div className="score">
            <h2> สรุปผลคะแนน </h2>
            <h3> {score} / {QuestionsData.length}</h3>
            <button onClick={restartApp}>ทำแบบทดสอบใหม่</button>
        </div>
    )

}
export default Score
import { useLocalStorage } from "usehooks-ts"
import { Question } from "../types/types"

export const QuestionWidget = ({ user, question }: Question) => {

  const [isPin, setPin] = useLocalStorage("Question", question);

  const togglePin = () => {
    setPin(question)
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-2 mx-auto">
      <div className="card-body">
        <h2 className="card-title">{user}</h2>
        <p>{question}</p>
        <div className="card-actions justify-end">
          <button onClick={togglePin} className="btn btn-sm">Pin Question</button>
        </div>
      </div>
    </div>
  )
}

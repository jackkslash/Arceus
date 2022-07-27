import { Question } from "../types/types"

export const QuestionWidget = ({ user, question }: Question) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-2 mx-auto">
      <div className="card-body">
        <h2 className="card-title">{user}</h2>
        <p>{question}</p>
      </div>
    </div>
  )
}

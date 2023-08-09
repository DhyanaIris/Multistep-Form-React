import { AiOutlineUser, AiOutlineStar } from 'react-icons/ai'
import { FiSend } from 'react-icons/fi';
import "./Steps.css";

const Steps = ({ currentStep }) => {
  return (
    <section className="steps">
      <section className="step active">
        <AiOutlineUser />
        <p>Identificação</p>
      </section>
      <section className={`step ${currentStep >= 1 ? "active" : ""}`}>
        <AiOutlineStar />
        <p>Avaliação</p>
      </section>
      <section className={`step ${currentStep >= 2 ? "active" : ""}`}>
        <FiSend />
        <p>Envio</p>
      </section>
    </section>
  )
}

export default Steps
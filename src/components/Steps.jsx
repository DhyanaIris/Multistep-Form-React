import { AiOutlineUser, AiOutlineStar } from 'react-icons/ai'
import { FiSend } from 'react-icons/fi';
import "./Steps.css";

const Steps = ({ currentStep }) => {
  return (
    <section className="steps">
      <section className="step">
        <AiOutlineUser />
        <p>Identificação</p>
      </section>
      <section className="step">
        <AiOutlineStar />
        <p>Avaliação</p>
      </section>
      <section className="step">
        <FiSend />
        <p>Envio</p>
      </section>
    </section>
  )
}

export default Steps
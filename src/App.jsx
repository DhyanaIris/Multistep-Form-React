// Components
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';
import UserForm from './components/UserForm/UserForm';
import ReviewForm from './components/ReviewForm/ReviewForm';
import Thanks from './components/Thanks/Thanks';
import Steps from './components/Steps/Steps';

//Hooks
import { useForm } from './hooks/useForm';
import { useState } from 'react';

import './App.css';

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return {...prev, [key] : value };
    });
  };

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} />
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents);

  return (
    <section className='app'>
      <section className='header'>
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o
          formulário abaixo para avaliar o produto
        </p>
      </section>
      <section className='form-container'>
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <section className='inputs-container'>
            {currentComponent}
          </section>
          <section className='actions'>
            {!isFirstStep && (
              <button type='button' onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}
            {!isLastStep ? (
              <button type='submit'>
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type='button'>
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </section>
        </form>
      </section>
    </section>
  )
}

export default App

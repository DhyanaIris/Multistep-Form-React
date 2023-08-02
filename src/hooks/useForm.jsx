import { useState } from "react";

// Função para avançar e retornar o formulario atual
export function useForm(steps) {
    const [currentStep, setCurrentStep] = useState(0);

    function changeStep(i, e) {
        // Se veio o "e" ocorre o preventDefault
        if(e) e.preventDefault(); 
        // Impedir que avance ou retorne uma quantidade maior do que tem de formulario
        if(i < 0 || i >= steps.length) return; 
        setCurrentStep(i);
    }

    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeStep,
        // Para trocar o botão "avançar" da última página para "enviar"
        isLastStep: currentStep + 1 === steps.length ? true : false, 
        // Para não mostrar o botão "voltar" na primeira página
        isFirstStep: currentStep === 0 ? true : false,
    }
}
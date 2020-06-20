import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const Div = styled.div`
    display: inline-block;
    width: max-content;
`;

const Span = styled.span`
    display: block;
`;
   

export default function Input({type, onChange}) {
    const [name, setName] = useState('');
    const [step, setStep] = useState(0);
    const [min, setMin] = useState(0);


    const inputType = (type)=>{
        switch (type){
            case 'juromensal':
                setName("Taxa de Juros Mensal (%)");
                setMin();
                setStep(0.01); 
                break;

            case 'montante':
                setName("Montante Inicial (R$)");
                setStep(0.01);
                setMin(100);
                break;

            case 'periodo':
                setName("Período (meses)");
                setStep(1);
                setMin(1);
                break;
                //no default
        }
    }

    useEffect(() => {
        inputType(type);
    }, [type]);
    

    const handleValue =(e)=>{
        let inputvalue = (e.target.value);
        (inputvalue < min) ? onChange(min) : onChange(inputvalue);      
    }
    
    return (
            <Div>
                <Span>{name}</Span>
                <input type="number" step={step} min={min} onChange={handleValue} placeholder={min} />
            </Div>
    )
}

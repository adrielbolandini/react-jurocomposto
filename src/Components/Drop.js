import React from 'react'
import styled from 'styled-components';

export default function Drop({value, time, tax}) {
    const elements = [];

    const Span = styled.span`
        ${(tax>0) ? `color: green` : `color: red`};
    `;

    const SpanMonth = styled.span`
        color: blue;
        display: inline-block;
    `;

    const Div = styled.div`
        display: inline-flex;
        flex-direction: column;
        margin-left: 1rem;
    `;

    const Boxdiv = styled.div`
    display: inline-block;
    margin-left: 2rem;
    margin-top: 1.5rem;
    border: 3px solid black;
    box-shadow: 5px 10px gray;
    box-sizing: border-box;
    padding: 7px;
`;
    
    for (let i=0; i< time; i++){
        let FinalValue = (value*((1+tax/100)**(i+1))).toFixed(2);
        let TaxResult = (FinalValue - value).toFixed(2);
        if (TaxResult >0){TaxResult = `+${TaxResult}`};
        let PercentResult=((FinalValue-value)/value*100).toFixed(2);
        if (value===0) {PercentResult=0};
        
        elements[i]={
            key: i,
            MonthNumber: (i+1),
            FinalValue: `R$ ${FinalValue}`,
            TaxResult: `R$ ${TaxResult}`,
            PercentResult: `${PercentResult}%`
        };
    }

    return(
        elements.map(e=>{
            return <Boxdiv key={e.key}>
                <SpanMonth>{e.MonthNumber}</SpanMonth>
                <Div>
                    <Span>{e.FinalValue}</Span>
                    <Span>{e.TaxResult}</Span>
                    <Span>{e.PercentResult}</Span>
                </Div>
            </Boxdiv>
        })
    )
}

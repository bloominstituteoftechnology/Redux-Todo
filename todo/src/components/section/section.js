import React from 'react'
import styled from 'styled-components'

import Line from './line'

const Section = ({title, data}) => {
    return (
        <SECTION>
            <h2>{title}{title ? ':' : null}</h2>
            {data ? data.map((line,i) => <Line data={line} key={i}/>) : null}
        </SECTION>
    )
}

const SECTION = styled.div`
    min-height: 1em;
    margin-top: 2.4rem;
    div {
        display: flex;
        pre {
            margin-left: 5.8rem;
        }
    }
`
export default Section
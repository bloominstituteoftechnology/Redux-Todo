import React from 'react'

const Line = ({data}) =>
    <div>
        <pre>
            {data.id < 10 ? '0' : null}{data.id} 
            {` ${data.text}`}
            {data.complete ? <span> --- COMPLETE</span> : null}
        </pre>
    </div>

export default Line
import React from 'react'

function CC({ style, children }) {
    return (
        <>
            <div style={style}>
                <div>CC</div>
                {children}
            </div>
        </>
    )
}

export default CC
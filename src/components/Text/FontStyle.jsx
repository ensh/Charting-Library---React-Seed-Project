import React from 'react'

const FontStyle = (props) => {
    let boldCName = props.fontStyle.bold ? 'boldBtn ciq-active' : 'boldBtn',
    italicCName = props.fontStyle.italic ? 'italicBtn ciq-active' : 'italicBtn';

    if(!props.fontOptions) return (<span></span>)
    return (
        <span>
            <div className={boldCName} onClick={props.onClick.bind(this, 'bold')}>B</div>
            <div className={italicCName} onClick={props.onClick.bind(this, 'italic')}>I</div>
        </span>
    )
}

export default FontStyle

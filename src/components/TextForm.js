import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    }
    const handleUpClick = () => {
        let newText = text.toLocaleUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!!", "success")
    }
    const handleLowClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!!", "success")
    }
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleChange}
                        style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}
                        id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>

            </div>
            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your text summary</h1>
                <p>{text.length} characters and {
                    text.split(" ").filter((element) => {
                        return element.length !== 0;
                    }).length
                }  words</p>
                <p>{0.008 * text.split(" ").filter((element) => {
                    return element.length !== 0;
                }).length} minutes to read any word or sentence written in text box!</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "(Enter something in Text-Box)"}</p>
            </div>
        </>
    )
}

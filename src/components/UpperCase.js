import React, {useState} from 'react';
import PropTypes from 'prop-types';

export default function UpperCase(props) {
    const [text, setText] = useState('');
    const handlerSetText = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to UpperCase", "Success");
    }
    const handlerTextEnter = (event) => {
        setText(event.target.value);
    }
    const handlerCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard", "Success");
    }
  return (
    <div>
        <h4 className='mb-3'>{props.title}</h4>
        <textarea className="form-control" value={text} onChange={handlerTextEnter} rows="8" placeholder="Enter text to convert to upper case"></textarea>
        <button className="btn btn-primary mt-3" onClick={handlerSetText}>Convert</button>
        <button className="btn btn-primary mt-3 mx-2" onClick={handlerCopy}>Copy Text</button>
        <div className="mt-3">
            <p>Word count:- {text.trim() === "" ? 0 : text.trim().split(/\s+/).length}</p>
            <p>Charaters count:- {text.length}</p>
            <h3 className='mt-5'>Preview</h3>
            <p>{text}</p>
        </div>
    </div>
  )
}

UpperCase.defaultProps = {
    title: 'UpperCase Converter'
}

UpperCase.propTypes = {
    title: PropTypes.string.isRequired
}
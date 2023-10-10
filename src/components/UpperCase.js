import React, {useState} from 'react';
import PropTypes from 'prop-types';

export default function UpperCase(props) {
    const [text, setText] = useState('Enter text to convert to upper case');
    const handlerSetText = () => {
        setText(text.toUpperCase());
    }
    const handlerTextEnter = (event) => {
        setText(event.target.value);
    }
  return (
    <div>
        <h4 className='mb-3'>{props.title}</h4>
        <textarea className="form-control" value={text} onChange={handlerTextEnter} rows="8" placeholder="Enter text to convert to upper case"></textarea>
        <button className="btn btn-primary mt-3" onClick={handlerSetText}>Convert</button>
    </div>
  )
}

UpperCase.defaultProps = {
    title: 'UpperCase Converter'
}

UpperCase.propTypes = {
    title: PropTypes.string.isRequired
}
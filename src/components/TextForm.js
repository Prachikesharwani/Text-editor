import React,{useState} from 'react'


function TextForm(props) {
    const [text,setText]=useState("")

    const handleUPClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case!","success");
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case!","success");
    }
    const handleClearClick=()=>{
        let newText=""
        setText(newText);
        props.showAlert("Text is cleared","success");
    }
    const handleCopy=()=>{
      navigator.clipboard.writeText(text);
      props.showAlert("Copied to clipboard","success");
    }
    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra spaces are removed","success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

  return (
    <>
    <div className='container' style={{color:props.mode==="dark"?"white":"black"}}>
      <h1 className='mb-4'>{props.heading}</h1>
      <div className='mb-3'>
        <textarea className='form-control' value={text} style={{backgroundColor:props.mode==="dark"?"#13466e":"white",color:props.mode==="dark"?"white":"black"}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUPClick}>convert to uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>convert to lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
      
    </div>
    <div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length } Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}

export default TextForm

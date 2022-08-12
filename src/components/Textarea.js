import React,{useState}from 'react'

export default function Textarea(props) {
const handleUpclick = ()=>{
  let newtext = text.toUpperCase();
  setText(newtext);
  props.showalert("Converted to Uppercase","success");
}
const handleLoclick = ()=>{
  let newtext = text.toLowerCase();
  setText(newtext);
  props.showalert("Converted to Lowercase","success");

}
const handleRevclick = ()=>{
  let newtext = text.split('').reverse().join('');
  setText(newtext);
  props.showalert("Text is Reversed","success");

}
const handleClearclick = ()=>{
  let newtext = '';
  setText(newtext);
  props.showalert("Text is Cleared","success");

}
const handleOnChange = (event)=>{
  setText(event.target.value)
}

const [text, setText] = useState("");
  return (
<>
<div className='conatainer' style={{color : props.mode === 'dark'?'white':'black'}}>
<h1>{props.heading} </h1>
<div className="mb-3">
<textarea className="form-control my-3" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark'?'#323232' : 'white',
color : props.mode === 'dark'?'white':'black'}} id="mybox" rows="10"></textarea>
</div>
<button disabled={text.length ===0}className="btn btn-primary mx-3 my-2" onClick={handleUpclick}> Convert text to Uppercase</button>
<button disabled={text.length ===0} className="btn btn-primary mx-3 my-2" onClick={handleLoclick}> Convert text to Lowercase</button>
<button disabled={text.length ===0} className="btn btn-primary mx-3 my-2" onClick={handleRevclick}> Reverse Text</button>
<button disabled={text.length ===0} className="btn btn-primary mx-3 my-2" onClick={handleClearclick}>Clear Text</button>
</div>

<div className="container my-5" style={{color : props.mode === 'dark'?'white':'black'}}>
  <h2> Summary of words </h2>
  <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
  <p>{0.0089 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read this</p>
  <h3>Preview</h3>
  <p>{text.length>0?text:"Enter something in textbox above to preview it here!!!"}</p>
</div>
  </>
  )
}

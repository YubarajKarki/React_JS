import React, {  useState } from "react";



export default function TextForm(props) {
      
      const [text, setText] = useState('');

      // text = "New Text"; //Wrong way to change the state
      // setText = ("New Text"); //Correct way to change the state

      const handleUpClick = () => {
            // console.log("Uppercase was clicked: " + text);
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to UpperCase!", "success");
      }
      const handleLowClick = () => {
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to LowerCase!", "success");

      }

      const handleClearClick = () => {
            let newText= '';
            setText(newText);
            props.showAlert("Successfully Text Cleared!", "success");

      }
          
      
      const handleOnChange = (event) => {
            // console.log("On Change");
            setText(event.target.value);
      } 

      const handleCopyClick = () => {
            var text = document.getElementById("myBox");
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert("Text Copied To Clipboard!", "success");

      } 

      const handleExtraSpace = (event) => {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert("Extra Space Removed!", "success");
      } 

      

      return (
      <>
<div className="container"  style={{color: props.mode === 'dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value ={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color:props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
  <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy Text</button>
  <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Space</button>
  
</div>

<div className="container my-3"  style={{color: props.mode === 'dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text && text.trim().split(/\s+/).length} words and  {text && text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text: "Please enter the text in Textbox to Preview here"}</p>
</div>

</>
      ) 
}
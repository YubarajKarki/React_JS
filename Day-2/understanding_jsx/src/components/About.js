import React from "react";

export default function About(props) {
  
// export default function About(props) {
//   const [myStyle, setMyStyle] = useState({
//     color: 'black',
//     backgroundColor: 'white'
//   })

  //   let myStyle = {
  //     color: props.mode ==='dark'?'white':'#042743',
  //     backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white', 
  // }

  // const [btnText, setBtnText] = useState("Enable Dark Mode");

  // const toggleStyle = () => {
  //   if (myStyle.color === 'black') {
  //     setMyStyle({
  //       color: 'white',
  //       backgroundColor: 'black',
  //       border: '1px solid white'
  //     })
  //     setBtnText("Enable Light Mode");
  //   }
  //   else {
  //     setMyStyle({
  //       color: 'black',
  //       backgroundColor: 'white'
  //     })
  //     setBtnText("Enable Dark Mode");
  //   }
  // }

  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743' ,
    backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white'
  }

  return (
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
      <h1 className="my-2">About Us</h1>
      {/* <h1 className="my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>About Us</h1> */}
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>Analyze Your Text </strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextUtils gives a way to analyze your text quickly and efficiently. Be it word count, character count 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button   collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
             <strong>Free to Use </strong> 
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
             TextUtils is a free character counter tool that provides instant character count and word count statistics fr a given text. TextUtils reports th number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button   collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Browser Compatible</strong> 
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              This word counter works in any web browser such as Chrome , Brave, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, bolg, books, excel document, pdf document, essays ,etc.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-2 pb-2">
        <button onClick={toggleStyle} type="button" className="btn btn-dark">{btnText}</button>
      </div> */}
    </div>
  )
}
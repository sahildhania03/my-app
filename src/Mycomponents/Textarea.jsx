import React,{useState} from 'react'

const Textarea = (props) => {
    const [text,newText]=useState("")

    const handleUpClick=()=>{
        console.log("You have clicked on up button")
        newText(text.toUpperCase())

    }
    const handleLower=()=>{
      newText(text.toLowerCase())
    }

    const handleOnChange=(event)=>{
        newText(event.target.value)
    }
    const rset=()=>{
        newText("")
    }
  return (
    <><div style={{backgroundColor: props.Mode==='light'?'white':'rgb(77, 77, 77)', color: props.Mode==='light'?'black':'white'}}>
      <div className="mb-3" >
        <label htmlFor="myForm" className="form-label"><h2>{props.heading}</h2></label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myForm" rows="8"></textarea>
      </div>
      <button className="btn_primary mx-2" onClick={handleUpClick}>Click to Uppercase</button>
      <button className="rset mx-2" onClick={rset}>Click to reset</button>
      <button className="low mx-2" onClick={handleLower}>Click to LowerCase</button>
      <div className="container my-3">
        <p>
            <h1>Text Summary</h1>
            Your text has {text.length} characters and {text.split(" ").length} words<br/> 
            and {0.008* text.split(" ").length} Minutes to read
        </p>
      </div>
      </div>
    </>
  )
}
export default Textarea

import React, {useState} from 'react';


function Default (){
    const handleupclick = () =>{
        // console.log("hii")
        let newtext=text.toUpperCase();
        settext(newtext)
    }
    const handlelowclick = () =>{
        // console.log("hii")
        let newtext=text.toLowerCase();
        settext(newtext)
    }

    const slice = () =>{
        // console.log("hii")
        let newtext=text.slice(1);
        settext(newtext)
    }
    
    const Delete = () =>{
        // console.log("hii")
        let newtext="";
        settext(newtext)
        // if (newtext==0);
        // console.log("default");
    }

    const removespace = () =>{
       
        // let newtext="";
        // settext(newtext)
        const newtext = text.replace(/\s/g, ' ');
        settext(newtext);
        
    }

    const handleonchange = (event) =>{
        // console.log("onchange")
        settext(event.target.value)

    }



    
    const [text, settext] = useState("Enter Text Here");
    // settext("changed ");
    return(
        <div className="container my-5 ">
     <h1>Welcome to the Default page</h1>
  <textarea className="form-control my-5 bg-light" value={text} onChange={handleonchange} id="myBox" rows="15"></textarea>
  <button className="btn btn-primary" onClick={handleupclick}>Convert To Upper Case</button>
  <button className="btn btn-primary mx-5" onClick={handlelowclick}>Convert To Lower Case</button>
  <button className="btn btn-warning mx-5" onClick={slice}>Convert To Slice String</button>
  <button className="btn btn-danger mx-5" onClick={Delete}>Clear</button>
  <button className="btn btn-success mx-5" onClick={removespace}>Remove Extra Space</button>
  <h1 className='my-5'>Summary</h1>
  <p>{text.length} characters {text.split(' ').length} words</p>
  <p> {0.008 * text.split(' ').length} Minutes to read </p>
  <h1>Preview</h1>
  <p>{text}</p>
  
</div>
)
}
  
export default Default;
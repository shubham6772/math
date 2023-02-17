import React,{useEffect, useState} from 'react';


var Latex = require("react-latex")
const url = "https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=AreaUnderTheCurve_2"

const Card = () => {

    const[que, setQue] = useState([]);

    
    const api = async () => {
        const response = await fetch(url);
        const jsonData = await response.json();
       setQue(jsonData);
      };

    useEffect(()=>{
        api();
    },[])

    
   const{Question} = que[0];
    

  return (
    <div>
   
      <h1>
      <Latex>
      {Question}
      </Latex>
      </h1>
    
    </div>
  )
}

export default Card;

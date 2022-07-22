// import axios from 'axios'
// import React, {useEffect, useState} from 'react'
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import Home from './components/pages/home/Index';

// function App() {

//   const [data, setData] = useState([])
//   const [click, setClick] = useState(false)
//   const [score, setScore] = useState(0)
//   const [currentQuestion, setCurrentQuestion] = useState(0)

//   const handleClick = () => setClick(!click)

//   useEffect(() => {
//     axios.get('https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean').then(res => {
//       let arrayResults = []
//       if (!res.data.results !== undefined) {
//         res.data.results.forEach(result => {
//           arrayResults.push({
//               category: result.category,
//               correct_answer: result.correct_answer,
//               question: result.question,
//               correct: false
//           });
//         });
//         setData(arrayResults)
//       }
//       console.log('result', arrayResults);
//       console.log('length', arrayResults.length);
//     })
//   }, [])

//   const handleCheckAnswer = (e) => {
//     let buttonAnswer = e.target.value;
//     let items = [...data]
//     if (data[currentQuestion].correct_answer == buttonAnswer) {
//       items[currentQuestion]['correct'] = true
//       setData(items)
//       setScore(score + 1)
//     }
//     setCurrentQuestion(currentQuestion+1)
//     console.log('current', currentQuestion);
//     console.log('items', items);
//   }

//   return (
//       <div>
//         {
//           data ? <Home data={data}/> : 'test'
//         }
//       </div>
    
//     <div className='col d-flex justify-content-center mt-5 text-center'>
//       {
//         currentQuestion == 10 ? 
//         <div>
//             <p>You scored : {score}/10</p>
//         </div>
//          : 
//         <div>
//           <Card>
//             <Card.Body>
//               <Card.Title>
//                 {
//                   click ? <h4>{ data[currentQuestion].category}</h4> : <h3>Welcome to the Trivia Challenge</h3>
//                 }
//                 </Card.Title>
//               {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
//               <Card.Text className="m-5">
//                 {
//                   click ? <h4>{data[currentQuestion].question}</h4> : <h3 >You will be presented with 10 True or False questions.</h3>
//                 }
//               </Card.Text>

//               {
//                 click ? '' : 
//                 <Card.Text className="m-5">
//                 <h3>Can you score 100%?</h3>
//                 </Card.Text>
//               }
//               {
//                 click ? 
//                 <Card.Text className="m-5">
//                   <p>{(currentQuestion + 1)}/10</p>
//                 </Card.Text>
//                 : '' 
                
//               }
//               {
//                 click ?  
//                   <div>
//                     <Button variant="success" size="lg" active value="True" name="true-button" onClick={handleCheckAnswer}>True</Button> 
//                     <Button variant="danger" size="lg" active value="False" name="false-button" onClick={handleCheckAnswer}>False</Button> 
//                   </div> : 
//                 <Button variant="primary" size="lg" active onClick={handleClick}>
//                   Primary button
//                 </Button>
//               }
              
//             </Card.Body>
//           </Card>
//         </div>
//       }
//     </div>
//   )
// }

// export default App;
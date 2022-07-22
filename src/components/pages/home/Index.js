import React, {useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import Question from '../question/Index';
import { API_BASE_URL } from '../../../constant';



function Home() {

    const [data, setData] = useState([])
    const [click, setClick] = useState(false)
    const [score, setScore] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0)
  
    const handleClick = () => setClick(!click)
  
    useEffect(() => {
      axios.get(`${API_BASE_URL}`).then(res => {
        let arrayResults = []
        if (!res.data.results !== undefined) {
          res.data.results.forEach(result => {
            arrayResults.push({
                category: result.category,
                correct_answer: result.correct_answer,
                question: result.question,
                correct: false
            });
          });
          setData(arrayResults)
        }
        console.log('result', arrayResults);
        console.log('length', arrayResults.length);
      })
    }, [])
  
    
    return(
        <div className='col d-flex justify-content-center mt-5 text-center rounded'>
            {
                click ? <Question data={data}/>
                : <Card style={{backgroundColor: '#f5eeee', borderRadius: '10px'}}>
                    <Card.Body style={{boxShadow:'0 10px 20px 0 rgb(0 0 0 / 20%'}}>
                        <Card.Title>
                            <h1>Welcome to the Trivia Challenge</h1>
                        </Card.Title>
                        <Card.Text className="mb-5">
                            <p>You will be presented with 10 True or False questions.</p>
                        </Card.Text>
                        <Card.Text className="m-5">
                            <span style={{backgroundColor: '##c7bfbf', 
                                fontWeight: '800', fontSize: '30px', borderRadius: '10px 2px'}}>Can you score 100%?</span>
                        </Card.Text>
                        <Button variant="primary" size="lg" onClick={handleClick} disabled={data.length <= 0 ? true : false}>
                            BEGIN
                        </Button>
                    </Card.Body>
                </Card>
            }
        </div>
        
    )
}

export default Home;
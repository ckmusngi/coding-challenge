import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, {useEffect, useState} from 'react'
import Score from '../score/Index';
import '../../../App.css';



function Question(props) {
    const [data, setData] = useState(props.data)
    const [score, setScore] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0)
  
    const handleCheckAnswer = (e) => {
        let buttonAnswer = e.target.value;
        let items = [...data]
        if (data[currentQuestion].correct_answer == buttonAnswer) {
          items[currentQuestion]['correct'] = true
          setData(items)
          setScore(score + 1)
        }
        setCurrentQuestion(currentQuestion+1)
        console.log('current', currentQuestion);
        console.log('items', items);
      }
  
  return (
    <> 
        {
            currentQuestion === 10 ? <Score data={data} score={score}/> :
            <Card id="card">
                <Card.Body id="card-body">
                    <Card.Title>
                        <h2>{props.data[currentQuestion].category}</h2>
                    </Card.Title>
                    <Card.Text className="m-5 align-middle text-wrap">
                        {props.data[currentQuestion].question}
                    </Card.Text>

                    <Card.Text className="m-5">
                        <p style={{fontWeight: '700'}}>{currentQuestion + 1}/10</p>
                    </Card.Text>
                    <div>
                        <Button className='m-1' variant="success" size="lg" active value="True" name="true-button" onClick={handleCheckAnswer}>True</Button> 
                        <Button className='m-1' variant="danger" size="lg" active value="False" name="false-button" onClick={handleCheckAnswer}>False</Button> 
                    </div> 
                </Card.Body>
            </Card>
        }
    </>
  )
}

export default Question;

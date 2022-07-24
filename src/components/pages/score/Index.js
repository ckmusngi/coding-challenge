import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import '../../../App.css';
import { VscCheck, VscClose } from "react-icons/vsc";

function Score(props) {
  return (
    <>
        <Card id="card">
            <Card.Title>
                Your score is : {props.score}/10
            </Card.Title>
            <Card.Body id="card-body">
            <Table striped bordered hover>
                <tbody>
                    {
                        props.data.map((item, key) => 
                            <tr>
                                <td id="td" key={key}>{item.question} 
                                    <span style={{float:'right'}}>{item.correct ? <VscCheck/> : <VscClose/>}</span></td>
                            </tr>
                        )
                    }
                    
                </tbody>
                </Table>
                <div className='d-grid gap-2'>
                    <Button id="" variant="secondary" size="lg" onClick={() => {window.location.reload(false)}}>
                        START
                    </Button>
                </div>
            </Card.Body>
            
        </Card>
    </>
  )
}

export default Score;

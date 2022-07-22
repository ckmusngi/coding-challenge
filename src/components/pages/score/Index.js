import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

function Score(props) {
  return (
    <>
        <Card>
            <Card.Title>
                <p>Your score is : {props.score}/10</p>
            </Card.Title>
            <Card.Body>
            <Table striped bordered hover>
                <tbody>
                    {
                        props.data.map((item, key) => 
                            <tr>
                                <td key={key}>{item.question}</td>
                            </tr>
                        )
                    }
                    
                </tbody>
                </Table>
                {/* <ListGroup>
                {
                    props.data.map((item, key) => 
                        <ListGroup.Item key={key} className="text-left">
                            {item.question} <Badge>{item.correct ? 'z' : 'x'}</Badge>
                        </ListGroup.Item>
                        
                    )
                }
                </ListGroup> */}
            </Card.Body>
        </Card>
    </>
  )
}

export default Score;

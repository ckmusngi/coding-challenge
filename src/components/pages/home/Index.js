import React, {useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Home(props) {
    return(
        <div className='col d-flex justify-content-center mt-5 text-center'>
            <Card>
                <Card.Body>
                    <Card.Title>
                    <h3>Welcome to the Trivia Challenge</h3>
                    </Card.Title>
                    <Card.Text className="m-5">
                    <h3>You will be presented with 10 True or False questions.</h3>
                    </Card.Text>
                    <Card.Text className="m-5">
                    <h3>Can you score 100%?</h3>
                    </Card.Text>
                    <Button variant="primary" size="lg" active >
                    Primary button
                    </Button>
                </Card.Body>
            </Card>
        </div>
        
    )
}

export default Home;
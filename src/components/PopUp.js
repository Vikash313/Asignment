import React  from 'react'
import Popup from 'reactjs-popup'
import { qBank } from './QuestCollection'

function PopUp(props) {

    

    return (
        <div>
            <h2>Congratulations!! Your Quiz is completed</h2>
            <Popup trigger={<button>Click here to view Score</button>}>
                <div>
                    <h3>Your score is {props.text} out of {qBank.length}</h3>
                </div>
            </Popup>
        </div>
    )
}

export default PopUp

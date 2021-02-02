import React, { Component } from 'react'
import { connect } from 'react-redux'
import  { qBank }  from './QuestCollection'
import '../style.css'
import PopUp from './PopUp'
import ControlledPopup from './ControlledPopup'

class Quiz extends Component {

    constructor(props) {
        super(props);
        this.onquestNext = this.onquestNext.bind(this);
        this.submitHandler = this.submitHandler.bind(this);

        this.state = {
             options: [],
             Answer: null,
             disabled: true,
             qFinish: false,
             score: 0
        }
    }


    getQuestion = () => {
        this.setState(() => {
            return{
                question: qBank[this.props.cIndex].question,
                options: qBank[this.props.cIndex].options,
                answer: qBank[this.props.cIndex].answer  
            }
        })
    }


    componentDidMount(){
        this.getQuestion();
    }

    onquestNext = () => {
        const { Answer, score, answer  } = this.state
        console.log("score")
        if(Answer === answer){
            console.log("Resubmitted")
            this.setState({
                score: score + 1
            })
        }

        this.setState({
            cIndex: this.props.cIndex + 1,
            Answer: null
        })
    }

    submitHandler = () => {
        console.log("Submitted")
        if(this.props.cIndex === qBank.length - 1){
            this.setState({
                qFinish: true
            })
        }
    }

    checkAnswer = answer => {
        this.setState({
            Answer: answer,
            disabled: false
        })
    }


    componentDidUpdate = (prevProps, prevState) => {
        if(this.props.cIndex !== prevProps.cIndex){
           this.setState((prevProps) => {
             return{
                question: qBank[this.props.cIndex].question,
                options: qBank[this.props.cIndex].options,
                answer: qBank[this.props.cIndex].answer
              }
            })
        }
    }

    render() {
        const{ question, options, Answer, qFinish } = this.state
        
        if(qFinish) {
         return (
             <div>
                 {/*{<PopUp text={this.state.score} />}*/}
                 <h2>Congratulations!! Your Quiz is completed</h2>
                 <h2>Your Score is {this.state.score} out of {qBank.length} </h2>
                 <ControlledPopup />
             </div>
          )
         }
         
        return (
            <div>
                {console.log("this.props", this.props)}
                {console.log("Index", this.props.cIndex)}
                <h2>{question}</h2>
                <span>{`Question ${this.props.cIndex + 1} of ${qBank.length} `}</span>
                {
                    options.map((option, index ) => 
                        <p key ={option.id} className={`options ${Answer === option? "selected" : null}`}
                            onClick = {() => this.checkAnswer(option)}>
                                {option}
                        </p>
                        )
                }
                {this.props.cIndex  < qBank.length - 1 && 
                <button disabled = {this.state.disabled} onClick={() => {this.props.onquestNext();this.onquestNext()}}>
                    Next </button>}
                {this.props.cIndex === qBank.length - 1 &&
                <button onClick={() => {this.submitHandler()}} disabled ={this.state.disabled} >
                    Submit
                </button> }
            </div>
        )
        
    }
}
 

const mapStateToProps = state => {
    return{
    cIndex: state.cIndex
    }
}

const mapDispatchToProps = dispatch => {
    return{
    onquestNext: () => dispatch({type: 'QUEST_NEXT_ASYNC', value: 1}), 
    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)


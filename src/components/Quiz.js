import React, { Component, useEffect } from 'react'
import { connect } from 'react-redux'
import ScoreDisplay from './ScoreDisplay'
import  { qBank }  from './QuestCollection'
import '../style.css'

class Quiz extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             options: [],
             Answer: null,
             cIndex : 0,
             disabled: true,
             qFinish: false,
             score: 0
        }
    }

    getQuestion = () => {
        const{cIndex} = this.state;
        this.setState(() => {
            return{
                question: qBank[cIndex].question,
                options: qBank[cIndex].options,
                answer: qBank[cIndex].answer
            }
        })
    }

    componentDidMount(){
        this.getQuestion();
    }

    nextHandler = () => {
        const { Answer, answer, score } = this.state

        if(Answer === answer){
            this.setState({
                score: score + 1
            })
        }

        this.setState({
            cIndex: this.state.cIndex + 1,
            Answer: null
        })
    }

    submitHandler = () => {
        if(this.state.cIndex === qBank.length -1){
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

    componentDidUpdate(prevProps, prevState){
        const{cIndex} = this.state;
        if(this.state.cIndex !== prevState.cIndex){
           this.setState(() => {
             return{
                question: qBank[cIndex].question,
                options: qBank[cIndex].options,
                answer: qBank[cIndex].answer
              }
            })
        }
    }
    
    //  useEffect(() => {
    //      getQuestion();
    //  },[])
    // state = {
    //     questionBank: []
    // };

    // getQuestions = () => {
    //     QuestCollection().then(question => {
    //         this.setState({
    //             questionBank: question
    //         });
    //     });

    // };

    // componentDidMount() {
    //     this.getQuestions();
    // }
    render() {
        const{ question, options, cIndex, Answer, qFinish } = this.state
        
        if(qFinish) {
         return (
             <div>
                 <h2>Your Score is {this.state.score} out of 12</h2>
             </div>
          )
         }
         
        return (
            <div>
                <h2>{question}</h2>
                <span>{`Question ${cIndex + 1} of ${qBank.length} `}</span>
                {
                    options.map(option => 
                        <p key ={option.id} className={`options ${Answer === option? "selected" : null}`}
                            onClick = {() => this.checkAnswer(option)}>
                                {option}
                        </p>
                        )
                }
                {cIndex < qBank.length - 1 && 
                <button disabled = {this.state.disabled} onClick={this.nextHandler}>
                    Next </button>}
                {cIndex === qBank.length -1 &&
                <button onClick={this.submitHandler} disabled ={this.state.disabled} >
                    Submit
                </button> }
            </div>
        )
        
    }
}


const mapStateToProps = state => {
    return{
    answer: state.answer

    }
}

const mapDispatchToProps = dispatch => {
    return{
    onquestNext: () => dispatch({type: 'QUEST_NEXT', value: 1})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)

//export default Quiz

// {this.state.questionBank.length > 0 && 
//     this.state.questionBank.map(({Id, question, answers, corretcIndex}) => <h4>{question}</h4>)}
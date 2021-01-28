import React from 'react'
import { connect } from 'react-redux'

function Questions(props) {
    return (
        <div>
            <h2>Questions</h2>
            <button>Next</button>
        </div>
    )
}

const mapStateToProps = state => {
    return{
    answer:state.answer
    }
}

const mapDispatchToProps = dispatch => {
    return{
    onquestNext: () => dispatch({type: 'QUEST_NEXT', value: 1}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions)

import React from 'react'
import { connect } from 'react-redux'
import { getNews } from '../actions/index1'

function Button(props) {
    return (
        <div>
            <button onClick={() => {props.getNews}}>Press to see news</button>
        </div>
    )
}

const mapDispatchToProps = {
    getNews: getNews,
}

export default connect(null, mapDispatchToProps)(Button)


// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import  { getNews }  from '../actions';


//  Button=(props) => (
//     <button onClick={() => {props.getNews}}>Press to see news</button>
// )

// const mapDispatchToProps= {
//     getNews: getNews,
// }

// export default connect(null, mapDispatchToProps)(Button)
import React from 'react'
import { connect } from 'react-redux'
import { loadImages } from '../actions'
import { IMAGES } from '../constants'
//import * as action from '../actions'
//import { setImages } from '../actions'
import { images } from '../actions'

function ImageGrid(props) {
    console.log(props.loadImages)
    return (
        <div>
            <h2>Dispatch Action</h2>
            <button onClick={()=> {props.loadImages()}}>Load Image</button>
        </div>
    )
}

const mapStateToProps = (images) => {
    return{
        images,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        loadImages: () => dispatch({type:IMAGES.LOAD, value: 1})  
    }
}
console.log(loadImages)

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid)



// import React from 'react'
// import { connect } from 'react-redux'
// import * as action from '../actions'

// function ImageGrid(props) {
//     console.log(props.action.loadImages)
//     return (
//         <div>
//             <h2>Dispatch Action</h2>
//             <button onClick={()=> {props.action.loadImages}}>Load Image</button>
//         </div>
//     )
// }

// const mapDispatchToProps = {
//     ...action
// }
// console.log(action.loadImages)
// export default connect(null, mapDispatchToProps)(ImageGrid)

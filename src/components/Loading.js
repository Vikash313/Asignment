import React, { Component } from 'react'
import { connect } from 'react-redux';


let Loading = ({ loading }) => (
    loading ? 
    <div>
        <h1>LOADING</h1>
    </div>: null
);

const mapStateToProps = (state) => ({
    loading: state.loading
})

export default connect(mapStateToProps, null)(Loading)
import React, { Component } from 'react'
import { connect } from 'react-redux'


let NewsItem = ({ article }) => (
    article ?
    <article>
          <h1>{article.title}</h1>
          <img sec={article.urlToImage}/>
          <h4>{article.description}</h4>
          <a href={article.url}>READ MORE</a>
    </article>: null
)

const mapStateToProps = (state) => ({
    article: state.news,
})

export default connect(mapStateToProps, null)(NewsItem)
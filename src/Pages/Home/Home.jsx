import React from 'react'
import CardList from '../../Component/CardListComponent/CardList'
import { Fragment , useEffect } from 'react'
import {connect} from 'react-redux'
function Home({candidate , searchField}) {
    return (
        <Fragment>
            <CardList />
        </Fragment>
    )
}

const mapStateToProps = (state)=>({
    candidate : state.candidate.data,
    searchField : state.candidate.searchField
})


export default connect(mapStateToProps)(Home)

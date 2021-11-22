import React from 'react'
import { Fragment } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { changeStatusToShortlisted, changeStatusToRejected } from '../../redux/CandidateRedux/Candidate.action'
import { CardStyle } from '../../Component/CardListComponent/StyleCard'
import Card from '../../Component/CardComponent/Card'


function Details({ allCandidates, shortlisted, rejected }) {
    const { id } = useParams()
    const history = useNavigate()
    const specificCandidate = allCandidates.filter(data => data.id.toString() === id)[0]
    console.log(specificCandidate)

    return (
        <Fragment>
            <CardStyle key={specificCandidate.id}>
                <Card name={specificCandidate.name} image={specificCandidate.Image} id={specificCandidate.id} />
            </CardStyle>
            <button onClick={() => {
                shortlisted(id)
                history('/')
            }} >Shortlist</button>
            <button onClick={() => {
                rejected(id)
                history('/')
            }}>Reject</button>



        </Fragment>
    )
}
const mapStateToProps = (state) => ({
    allCandidates: state.candidate.data
})

const mapDispatchToProps = (dispatch) => ({
    shortlisted: (id) => dispatch(changeStatusToShortlisted(id)),
    rejected: (id) => dispatch(changeStatusToRejected(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(Details)

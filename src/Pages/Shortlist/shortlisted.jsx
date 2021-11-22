import {React, Fragment} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { CardStyle } from '../../Component/CardListComponent/StyleCard'
import Card from '../../Component/CardComponent/Card'
function Shortlisted({ shortListedCandidates }) {
    console.log('shortlisted candidates -----', shortListedCandidates)
    const filteredShorted = shortListedCandidates.filter(candidate => candidate.status === 'Shortlisted')
 return (<Fragment>  {
       filteredShorted.map(candidate =>{
           return(
            <Fragment>
            <CardStyle key={candidate.id}>
           <Card name={candidate.name} image={candidate.Image} id={candidate.id} />
       </CardStyle>
       <Link to="/">Back</Link>
       </Fragment>
           )
       })
   }
   </Fragment>
 )
}
const mapStateToProps = (state) => ({
    shortListedCandidates: state.candidate.data
})


export default connect(mapStateToProps)(Shortlisted)

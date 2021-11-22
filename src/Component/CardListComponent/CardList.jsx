import {React, useState , useEffect} from 'react';
import axios from 'axios'
import Card from '../CardComponent/Card'
import {CardStyle} from './StyleCard'
import {SearchStyle} from './SearchStyle'
import {Container} from './StyleCardList'
import {connect} from 'react-redux'
import {fetchApi} from '../../redux/CandidateRedux/Candidate.action'
import {useNavigate} from 'react-router-dom'

function CardList({candidate,setCandidate}) {
    const [name , setName] = useState('')
    const history = useNavigate()
    useEffect(()=>{
        if(localStorage.length !== 1){
            axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json')
            .then(data => {setCandidate(data.data)
            })
            .catch((error) => {
                console.error(error)
            })
        }
       
    },[])
   
    const filtered = candidate.filter(detail =>detail.name.toLowerCase().includes(name))
    return (
        <div>
            <SearchStyle type="text" placeholder="Search Candidate" value={name} onChange={e=>setName(e.target.value)}/>
      
        <Container>
            
            {
                filtered.map(detail=>{
                    
                    console.log(detail)
                    return (
                        
                    <CardStyle key={detail.id} onClick={()=>history(`/editCandidate/${detail.id}`)}>
                       <Card name={detail.name} image={detail.Image} id={detail.id} />
                        </CardStyle>
                   
                        
                    )
                })
            }
        </Container>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    setCandidate :(data)=> dispatch(fetchApi(data))
})
const mapStateToProps = state =>({
    candidate: state.candidate.data
})

export default connect(mapStateToProps,mapDispatchToProps)(CardList)

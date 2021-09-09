import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchStart } from './../actions';
import axios from 'axios'

const Sport=(props) =>{
    const { sport, isFetching, error } = props;
    useEffect(()=>{

    });

    if (error) {
        return <h2>you got an error: {error}</h2>
    }
    if (isFetching) {
        return <h2>Fetching a new sport</h2>
    }
    const id = 224
    const handleClick =() => {
        props.fetchStart();
        axios.get(`https://sports.api.decathlon.com/sports/${id}`)
            .then(resp=>{
                console.log(resp)
            }).catch(err=>console.log(err))
    }

    return (
        <>
            <div>
                <form>
                    <label>
                        Sport id:
                        <input type='text' name='name'></input>
                    </label>
                    <button onClick={handleClick}>check if the id exists</button>
                </form>
                <h2>id {sport.id}: {sport.name}</h2>
                <img src={sport.icon}/>
            </div>
            
        </>
    )
}

const mapStateToProps = state => {
    return {
        sport: state.sport,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchStart})(Sport);
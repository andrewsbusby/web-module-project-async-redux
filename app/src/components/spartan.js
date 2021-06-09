import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import { getSpartan } from './../actions/index';

const Spartan = (props) => {
    const { spartan, isFetching, error } = props;
    useEffect(() => {
        props.dispatch(getSpartan());
    }, );
    const handleClick = () => {
        props.dispatch(getSpartan());
    }
    if (error) {
        return <h2>We got an error: {error}</h2>
    }
    if (isFetching) {
        return <h2>Spartan incoming!!</h2>
    }

    return (
        <> 
            <div>
                <h2>Say hello to: {spartan} </h2>
                <img src={spartan} alt='Halo Spartan'/>
            </div>
            <button onClick={handleClick}>Drop in Spartan</button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        spartan: state.spartan,
        isFetching: state.isFetching,
        error: state.error
    };
}

export default connect(mapStateToProps) (Spartan);
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';
import MainContainer from './MainContainer';
import Loading from './Loading';

import { space } from '../styles';

function StartOver () {
    return (
        <div className="col-sm-12" style={space}>
            <Link to="/playerOne">
                <button className="btn btn-lg btn-danger">
                    Start Over
                </button>
            </Link>
        </div>
    );
}

function Tie ({scores, playersInfo}) {
    return (
        <MainContainer>
            <h1>It's a tie</h1>
            <div className="col-sm-8 col-sm-offset-2">
                <UserDetailsWrapper header="Player One">
                    <UserDetails  score={scores[0]} info={playersInfo[0]} />
                </UserDetailsWrapper>
                <UserDetailsWrapper header="Player Two">
                    <UserDetails score={scores[1]} info={playersInfo[1]} />
                </UserDetailsWrapper>
            </div>
            <StartOver />
        </MainContainer>
    )
}

function Results ({isLoading, scores, playersInfo}) {

    if ( isLoading === true ) {
        return (
            <Loading/>
        );
    }

    if ( scores[0] === scores[1] ) {

        return (
            <Tie scores={scores} playersInfo={playersInfo} />
        );
    }

    const winningIndex = scores[0] > scores[1] ? 0 : 1;
    const loosingIndex = winningIndex === 0 ? 1 : 0;

    return (
        <MainContainer>
            <h1>Results</h1>
            <div className="col-sm-8 col-sm-offset-2">
                <UserDetailsWrapper header="Winner">
                    <UserDetails  score={scores[winningIndex]} info={playersInfo[winningIndex]} />
                </UserDetailsWrapper>
                <UserDetailsWrapper header="Looser">
                    <UserDetails score={scores[loosingIndex]} info={playersInfo[loosingIndex]} />
                </UserDetailsWrapper>
            </div>
            <StartOver />
        </MainContainer>
    )
};

Results.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
};

export default Results;
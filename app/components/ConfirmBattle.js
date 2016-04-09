import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';
import MainContainer from './MainContainer';
import Loading from './Loading';

import { space } from '../styles';

function ConfirmBattle({isLoading, playersInfo, onInitiateBattle}) {

    return isLoading === true
        ? <Loading />
        :   <MainContainer>
                <h1>Confirm players</h1>
                <div className="col-sm-8 col-sm-offset-2">
                    <UserDetailsWrapper header="Player One">
                        <UserDetails info={playersInfo[0]} />
                    </UserDetailsWrapper>
                    <UserDetailsWrapper header="Player Two">
                        <UserDetails info={playersInfo[1]} />
                    </UserDetailsWrapper>
                </div>

                <div className="col-sm-8 col-sm-offset-2">
                    <div className="col-sm-12" style={space}>
                        <button className="btn btn-lg btn-success" onClick={onInitiateBattle}>
                            Initiate Battle
                        </button>
                    </div>
                    <div className="col-sm-12" style={space}>
                        <Link to="/playerOne">
                            <button className="btn btn-lg btn-danger">
                                Reselect players
                            </button>
                        </Link>
                    </div>
                </div>
            </MainContainer>

    ;
};

ConfirmBattle.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired
};


export default ConfirmBattle;
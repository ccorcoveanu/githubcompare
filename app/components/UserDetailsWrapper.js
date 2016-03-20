var React = require('react');
var PropTypes = React.PropTypes;

function UserDetailsWrapper (props) {
    return (
        <div className="col-sm-6">
            <p className="lead">
                {props.player}
            </p>
            {props.children}
        </div>
    );
};

UserDetailsWrapper.propTypes = {
    player: PropTypes.string.isRequired
};

module.exports = UserDetailsWrapper;
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, favoriteNumber, children }) => {
    //const { name, children } = props;

    return (
        <Fragment>
            <div>Hello {name}</div>
            <div>Children value : {children}</div>
            <div>FavoriteNumber : {favoriteNumber}</div>
        </Fragment>
    );
};

MyComponent.defaultProps = {
    name: 'Test',
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;

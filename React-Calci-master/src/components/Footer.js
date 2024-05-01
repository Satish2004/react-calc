import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
    const getFooterStyle = () => {
        return {
            textAlign: 'center',
            color: props.darkMode ? 'white' : 'black'
        }
    }
    return (
        <div style={getFooterStyle()}>
            @satish chandra 2024
        </div>
    )
;}

Footer.propTypes = {
    darkMode: PropTypes.bool.isRequired
}
export default Footer;

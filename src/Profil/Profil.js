import React from 'react'
import PropTypes from "prop-types";


function Profil(props) {
    Profil.defaultProps = {
        version: "16"
    };
    return (
        <div className="profil">
            <div>{props.name}
                {props.bio}
                {props.profession}
                {props.children}
            </div>

            <button onClick={() => props.handleName(`My name is ${props.name}`)}>
                ClickMe
            </button>

        </div>
    );}

    Profil.propTypes = {
        name: PropTypes.string,
        bio: PropTypes.string,
        profession:PropTypes.string,
        childrent: PropTypes.string,
        handleName: PropTypes.func
        

    };


export default Profil;
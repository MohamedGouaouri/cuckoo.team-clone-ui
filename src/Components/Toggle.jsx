import React from "react";
// import styled from "styled-components";
import './toggle.css'

// const Switch = styled.label`
//     position: relative;
//     display: inline-block;
//     width: 60px;
//     height: 34px;
// `

// const CheckBox = styled.input`
//     opacity: 0;
//     width: 0;
//     height: 0;

//     &:checked + &{
//         background-color: #2196F3;
//     }
//     &:focus{
//         box-shadow: 0 0 1px #2196F3;
//     }
// `

// const RoundedSlider = styled.span`
//     position: absolute;
//     cursor: pointer;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-color: #ccc;
//     -webkit-transition: .4s;
//     transition: .4s;

//     &:before{
//         position: absolute;
//         content: "";
//         height: 26px;
//         width: 26px;
//         left: 4px;
//         bottom: 4px;
//         background-color: white;
//         -webkit-transition: .4s;
//         transition: .4s;
//     }
// `

const Toggle = ({ onToggle }) => {
    return <div className="toggle">
        <label className="switch">
            <input type="checkbox" onClick={
                () => onToggle()
            } />
            <span className="slider round"></span>
        </label>
    </div>
}

export default Toggle
import AssessmentContext from '../../helpers/Contexts';
import Header from '../Header';
import { Background, Content } from '../../styles';
import styled from "styled-components";
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faRefresh, faX } from '@fortawesome/free-solid-svg-icons';
import { Person } from 'react-bootstrap-icons';
const Q2 = () => {
    return (

        <div className="container" >
            <div className="card">
                <button className="btn btn-light"> Myself</button>
            </div>
            <div className="card">
                <button className="btn btn-light"> Someone Else</button>
            </div>
        </div >
    )
}

export default Q2;
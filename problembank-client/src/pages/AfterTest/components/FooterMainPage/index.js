import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import problemsBank from '../../../../apis/problemsBank';
import { getProblemsInformation } from '../../../../_actions/problemAction';
import App from '../../../TestProblem/components/Timer';
import './style.scss'
import { Link } from "react-router-dom";

export default function FooterMainPage(props) {
    const [value, setValue] = useState({})
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProblemsInformation()).then(response => {
            const { data } = response.payload
            setValue(data)
        })
    }, [])
    
    let getLink= window.location.href;
    let arr = getLink.split("/");
    return (
        <div className="footer__mainpage">
            <div className="wrapper">
                <div className="col">
                    <h2>{arr[arr.length-1]}/1</h2>
                    <h4>채점 결과</h4>
                </div>
            </div>
        </div>
    )
}
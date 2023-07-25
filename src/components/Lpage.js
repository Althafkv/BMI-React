import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Lpage.css'

function Lpage() {

    const navigate = useNavigate()
    const clickbtn = () => {
        navigate('/bmi')
    }

    return (
        <div className='mt-5 text-center fw-bolder text-light'>
            <h1 className='bmih'>BMI Calculator</h1>
            <img src="https://i.ibb.co/Swmv9Jx/bmi-removebg-preview.png" alt="logo" />
            <div>
                <button onClick={clickbtn} className='btn btn-success lpagebtn shadow'>Lets Calculate your BMI</button>
            </div>
        </div>
    )
}

export default Lpage
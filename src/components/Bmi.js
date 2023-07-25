import React, { useEffect } from 'react'
import { Button, Divider, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Bmi.css'
import Bmispinner from './Bmispinner';

function Bmi() {

    const [showspin, setShowspin] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setShowspin(false)
        }, 1000);
    })

    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [bmi, setBmi] = useState(0)
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (weight == 0 || height == 0) {
            toast.warning("Please enter a valid input")
        } else {
            const result = (weight / (height * height) * 703)
            setBmi(result.toFixed(1));

            if (bmi < 25) {
                setMessage('You are Under Weight')
            } else if (bmi >= 25 && bmi < 30) {
                setMessage('You are Healthy weight')
            } else {
                setMessage('You are Over weight')
            }
        }

    }

    const resetbtn = () => {
        setWeight(0)
        setHeight(0)
        setBmi(0)
        setMessage('')
        toast("Cleared")
    }

    return (
        <>
            {
                showspin ? <div style={{ margin: "250px" }}><Bmispinner /></div> :
                    <div className='app'>
                        <div className="container shadow">
                            {/* heading part */}
                            <div className="heading_part">
                                <div className='text-center mb-1'>
                                    <img width={"85px"} height={"60px"} src="https://media.istockphoto.com/vectors/indikator-bmi-on-white-background-chart-concept-vector-icon-vector-id1361979562?b=1&k=20&m=1361979562&s=170667a&w=0&h=g73GlTrwlEZ3KKqpe5mUfroyj7mOFRTp09cW2P1cUu8=" alt="logo" />
                                </div>
                                <h3 className='text-center fw-bolder mb-2'>BMI Calculator</h3>
                            </div>
                            {/* result part */}
                            <div className="result_part">
                                <div className="card-text">
                                    <p>Your BMI</p>
                                    <h3>{bmi}</h3>
                                </div>
                            </div>

                            <p className='text-center mt-3 fw-bolder text-primary'>{message}</p>

                            {/* form */}
                            <form onSubmit={handleSubmit}>
                                <div style={{ marginTop: "40px" }} className='all_inputs'>
                                    <div className="text_filed">
                                        <TextField
                                            id="outlined-basic"
                                            label="Weight (ibs)"
                                            variant="outlined"
                                            autoComplete='off'
                                            value={weight || ""}
                                            onChange={e => setWeight(e.target.value)}
                                        />
                                    </div>
                                    <div className="text_filed">
                                        <TextField
                                            id="outlined-basic"
                                            label="Height (inc)"
                                            variant="outlined"
                                            autoComplete='off'
                                            value={height || ""}
                                            onChange={e => setHeight(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className='end_btn'>
                                    <Stack spacing={4} direction="row" divider={<Divider orientation="vertical" flexItem />}>
                                        <Button
                                            variant="contained"
                                            color="success"
                                            type='submit'
                                        >
                                            Submit
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            color="error"
                                            onClick={resetbtn}
                                        >
                                            Reset
                                        </Button>
                                    </Stack>
                                </div>
                                <ToastContainer />

                            </form>
                        </div>
                    </div>
            }
        </>
    )
}

export default Bmi
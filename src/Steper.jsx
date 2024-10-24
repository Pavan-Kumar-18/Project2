// MyStepper.js
import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography } from '@mui/material'; // Import Typography
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

const steps = ['Step One', 'Step Two', 'Step Three'];

const MyStepper = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const renderStepContent = () => {
        switch (activeStep) {
            case 0:
                return <StepOne />;
            case 1:
                return <StepTwo />;
            case 2:
                return <StepThree />;
            default:
                return <StepOne />;
        }
    };

    return (
        <div>
            <Stepper activeStep={activeStep}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                <Typography variant="h6" gutterBottom>
                    {`Current Step: ${steps[activeStep]}`}
                </Typography>
                {renderStepContent()}
                <div>
                    <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                    >
                        Back
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                    >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default MyStepper;

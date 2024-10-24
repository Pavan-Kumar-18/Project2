// MyStepper.js
import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

const MyStepper = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
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

            <div>
                <Typography variant="h6" gutterBottom>
                  
                </Typography>
                {renderStepContent()}
                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
                    {activeStep < 2 && ( 
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                        >
                            Continue
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyStepper;

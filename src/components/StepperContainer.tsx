import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from 'styles/StepperContainer.module.scss';

import image from "static/emoji.webp";
import logo from "static/logo.png";
import {useRecoilValue} from "recoil";
import {selectedTableOneAtom, selectedTableTwoAtom, userAtom} from "../store/atoms";
import {useQuery} from "@tanstack/react-query";
import api from "../services/user.service";
import {CircularProgress} from "@mui/material";
import {useEffect} from "react";

const steps = ['Выберите себя из списка', 'О чем тест', 'Общекорпоративные компетенции', 'Функциональные компетенции'];

interface StepperContainerProps {
    children: React.ReactNode[]; // Типизация дочерних элементов
}

const StepperContainer: React.FC<StepperContainerProps> = ({ children }) => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const user = useRecoilValue(userAtom);
    const table1 = useRecoilValue(selectedTableOneAtom);
    const table2 = useRecoilValue(selectedTableTwoAtom);

    useEffect(() => {
        if (user !== null) {
            setActiveStep(prev => prev + 1);
        }
    }, [user]);

    const switchDisble = () => {
        if (activeStep === 0 && user === null) return true;
        if (activeStep === 2 && table1.includes(0)) return true;
        if (activeStep === 3 && table2.includes(0)) return true;
    }

    const isStepOptional = (step: number) => {
        return step === 10;
    };

    const isStepSkipped = (step: number) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        if (activeStep === steps.length - 1) {
            api.createDeal(user, table1, table2);
        }
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.


            throw new Error("Для начала заполните этап");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ width: '100%' }} className={styles.container}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps: Record<string, any> = {};
                    const labelProps: Record<string, any> = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography variant="caption">Необязательно</Typography>
                        );
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>



            {activeStep === steps.length ? (
                <React.Fragment>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '820px' }}>
                        <h1>{"Тест успешно отправлен "}<img src={image} height={"35px"} alt={"emoji"}/></h1>
                    </div>
                    <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                    <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Пройти тест заново</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <div className={styles.content} style={activeStep === 0 ? {} : {}}>
                        {activeStep === 0 && <img width={"500px"} src={logo} alt={"Gagawa"}/>}
                        <h2 style={{fontSize: '33px', marginBottom: '30px'}}>{steps[activeStep]}</h2>
                        {children[activeStep]}
                    </div>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            {'Назад'}
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {isStepOptional(activeStep) && (
                            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                {'Пропустить'}
                            </Button>
                        )}

                        <Button onClick={handleNext} disabled={switchDisble()}>
                            {activeStep === steps.length - 1 ? 'Завершить' : 'Далее'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
};

export default StepperContainer;
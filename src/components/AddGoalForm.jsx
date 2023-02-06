import { Button, FormGroup, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'; 
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addGoal } from '../redux/features/addGoalSlice';


const AddGoalForm = () => {
    const dispatch = useDispatch(); 
    const navigate = useNavigate(); 
    const [goal, setGoal] = useState(0); 
    const onGoalChange = (e) => {
        setGoal(e.target.value); 
    }; 

    const onAddGoal = (e) => {
        e.preventDefault(); 
        console.log(goal)
        dispatch(addGoal({goal: goal}))

                // resets state after dispatching content

        setGoal(0); 
        // redirect to main page 
        navigate("/")
    }; 

    return (
        <React.Fragment>
        <Typography>How many books would you like to read?</Typography>
        <FormGroup onSubmit={onAddGoal}>
            <TextField 
                variant="outlined"
                type="text" 
                label="Goal"
                value={goal}
                onChange={onGoalChange}
            />
            <Button 
                variant="contained"
                onClick={onAddGoal}
            >
                Add Goal
            </Button>
        </FormGroup>
        </React.Fragment>
    )   
}; 

export default AddGoalForm; 
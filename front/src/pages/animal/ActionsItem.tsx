import React from 'react';
import { FormControlLabel, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Animal } from '../../store/animal/animal.type';

interface propsActionsItem {
    animal: Animal,
    onOpenModal: () => void;
    onHandleClick: (row: Animal) => void;
    setEdit: (value: boolean) => void;
    setRemove: (value: boolean) => void;
}

const ActionsItem: React.FC<propsActionsItem> = ({
    animal,
    onOpenModal,
    onHandleClick,
    setEdit,
    setRemove

}) => {

    const editAnimal = () => {
        onOpenModal();
        setEdit(true); setRemove(false);
        onHandleClick(animal);
    }
    const deleteAnimal = () => {
        onOpenModal();
        setRemove(true);
        setEdit(false);
        onHandleClick(animal);
    }

    return <FormControlLabel

        label=""
        control={
            <>
                <IconButton color="secondary" aria-label="add an alarm" onClick={editAnimal} >
                    <EditIcon style={{ color: '#6B8E23' }} />
                </IconButton>

                <IconButton color="secondary" aria-label="add an alarm" onClick={deleteAnimal} >
                    <DeleteIcon style={{ color: '#6B8E23' }} />
                </IconButton>

            </>
        }

    />
};



export default ActionsItem
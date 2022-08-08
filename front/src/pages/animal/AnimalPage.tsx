import { Breadcrumbs, Container, Link, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getAnimals } from '../../store/animal/animal.action';
import { Animal } from '../../store/animal/animal.type';
import { useAppDispatch, useAppSelector } from '../../store/redux-hooks';
import AnimalsList from './AnimalList';
import AnimalModal from './AnimalModal';


const AnimalPage: React.FC = () => {
  const animalStore = useAppSelector((state) => state.animal);
  const dispatch = useAppDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [animal, setAnimal] = useState<Animal>({} as Animal);

  const [edit, setEdit] = useState(false);
  const [remove, setRemove] = useState(false);

  useEffect(() => {
    dispatch(getAnimals());
  }, []);


  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleClick = (row: any) => {
    setAnimal(row);
  };


  return (
    <div >
      <Container>
        <div data-aos="fade-right" data-aos-duration="3000" data-aos-easing="ease-in-sine" role="presentation" style={{ marginTop: 20 }} >
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Admin
            </Link>
            <Typography color="text.primary">Animales</Typography>
          </Breadcrumbs>
        </div>
        <Typography data-aos="fade-left" data-aos-duration="3000" variant="h4" component="div" gutterBottom sx={{ marginTop: 3 }}>
          Establecimiento Ganadero - Animales
        </Typography>
        {openModal && (
          <AnimalModal
            edit={edit}
            remove={remove}
            animal={animal}
            openModal={openModal}
            onClose={handleClose} />
        )}
        <Typography variant="h6" data-aos="fade-up" data-aos-duration="3000">
          Lista de Animales
        </Typography>
        <AnimalsList
          setEdit={setEdit}
          setRemove={setRemove}
          onOpenModal={handleOpen}
          onHandleClick={handleClick}
          animals={animalStore.animals}
        />
      </Container>
    </div>
  );
};

export default AnimalPage;
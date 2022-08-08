//CRUD en DB de animals
import Animal from './animals.js';

export const getAll = async (req, res) => {
    try {
        const animals = await Animal.find({});
        res.json(animals);
    } catch (error) {
        res.status(400).json(error)
    }
}
export const getAnimals = async (req, res) => {
    try {
        const all = await Animal.find({});
        const animals = all.filter(animal => animal.is_active && animal);
        res.json(animals);
    } catch (error) {
        res.status(400).json({ message: 'Animal no encontrado' })
    }
}

export const getAnimal = async (req, res) => {
    const animalFound = await Animal.findOne({ idSenasa: req.params.id });
    if (animalFound) return res.status(200).json({ message: 'Animal encontrado', animalFound })
    else return res.status(400).json({ message: 'Animal no encontrado' })
}

export const getAnimalbyId = async (req, res) => {
    const animalFound = await Animal.findById({ _id: req.params.id });
    if (animalFound) return res.status(200).json({ message: 'Animal encontrado', animalFound })
    else return res.status(400).json({ message: 'Animal no encontrado' })
}

export const createAnimal = async (req, res) => {
    const animalFound = await Animal.findOne({ idSenasa: req.body.idSenasa });
    if (animalFound) return res.status(400).json({ message: 'El animal ya existe' });
    const animal = new Animal(req.body);
    const savedAnimal = await animal.save(animal);
    res.json({ message: 'animal saved', savedAnimal });
}

export const updateAnimal = async (req, res) => {
    const animalUpdated = await Animal.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
    if (!animalUpdated) return res.status(400).json({ message: 'Animal no encontrado' });
    res.json({ message: 'Animal udated', animalUpdated });
}

export const deleteAnimal = async (req, res) => {
    const animalDeleted = await Animal.findByIdAndUpdate(
        req.params.id,
        { is_active: false },
        { new: true }
    );
    if (!animalDeleted) return res.status(400).json({ message: 'Animal no encontrado' });
    res.json({ message: 'animal deleted', animalDeleted });

}



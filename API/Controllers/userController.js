const User = require('../../Database/Models/user');


const createUser = async (req, res) => {
    try {
        const { name, email, phoneNumber } = req.body;

        if (!name || !email || !phoneNumber) {
            return res.status(400).json({ message: 'User name, email, and phoneNumber are required.' });
        }

        const newUser = await User.create({ name, email, phoneNumber});
        return res.status(201).json({ message: 'User created successfully.', newUser });
    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({ message: 'Error creating user.', error });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        return res.status(200).json(users);
    } catch (error) {
        console.error('Error retrieving users:', error.message);
        return res.status(500).json({ message: 'Error retrieving users.', error: error.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id || isNaN(parseInt(id))) {
            return res.status(400).json({ message: 'Invalid User ID.' });
        }

        const user = await User.findOne({ where: { id } });
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }
        return res.status(200).json(user);
    } catch (error) {
        console.error('Error retrieving user:', error.message);
        return res.status(500).json({ message: 'Error retrieving user.', error: error.message });
    }
};

const deleteUserById = async (req, res) => {
    try {
        const { id } = req.params;
        // Ensure ID is valid
        if (!id || isNaN(parseInt(id))) {
            return res.status(400).json({ message: 'Invalid User ID.' });
        }

        const user = await User.findOne({ where: { id } });
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }
        await user.destroy();
        return res.status(200).json({ message: 'User deleted successfully.' });
    } catch (error) {
        console.error('Error deleting user:', error.message);
        return res.status(500).json({ message: 'Error deleting user.', error: error.message });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    deleteUserById,
    createUser
}
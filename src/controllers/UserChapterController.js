const userChapterService = require('../services/UserChapterService');

// Controller untuk mendapatkan daftar userChapter
const getAllUserChapters = async (req, res) => {
    try {
        const userChapters = await userChapterService.getAllUserChapters();
        res.status(200).json(userChapters);
        console.log(`getAllUserChapters successfully requested`);
    } catch (error) {
        res.status(500).json({ message: "Failed to get userChapters", detail: error.message });
        console.log(error.mesage);
    }
};

// Controller untuk mendapatkan userChapter by id
const getUserChapterById = async(req, res) => {
    const id = parseInt(req.params.id);

    try {
        const userChapter = await userChapterService.getUserChapterById(id);
        res.status(200).json(userChapter);
    } catch (error) {
        res.status(500).json({ message: `Failed to get userChapter with id ${ id }`})
        console.log(error.mesage);
    }
}

// Controller untuk membuat userChapter baru
const createUserChapter = async (req, res) => {
    try {
        const newData = req.body;

        const userChapter = await userChapterService.createUserChapter(newData);
        res.status(201).json({message: `Successfully create new userChapter ${newData.name}`, userChapter: userChapter});
    } catch (error) {
        res.status(500).json({ message: "Failed to create new userChapter", data: error.message });
        console.log(error.message);
        
    }
};

// Controller untuk update userChapter by id
const updateUserChapter = async (req, res) => {
    const user_course_id = parseInt(req.params.id);

    const updateData = req.body;

    try {
        const updateUserChapter = await userChapterService.updateUserChapter(user_course_id, updateData);
        res.status(200).json({message: "Successfully updated userChapter", data: updateUserChapter});
    } catch (error) {
        res.status(500).json({ message: "Failed to update userChapter", detail: error.message });
        console.log(error.message);
    }
};

// Controller untuk delete userChapter by id
const deleteUserChapter = async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const deleteUserChapter = await userChapterService.deleteUserChapter(id);
        res.status(200).json(deleteUserChapter);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create userChapter' });
        console.log(error.message);
        
    }
};

module.exports = {
    getAllUserChapters,
    getUserChapterById,
    createUserChapter,
    updateUserChapter,
    deleteUserChapter
};

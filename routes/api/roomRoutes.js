const express = require("express");
const router = express.Router();

const Room = require('../../models/room')
const RoomController = require('../../controller/RoomsController')

router.post('/add_room', RoomController.addRoom)
router.put('/update_room',RoomController.updateRoom)
router.delete('/delete_room',RoomController.deleteRoom)
router.get('/list_all_rooms',RoomController.listAllRooms)


router.get("/getallrooms", async(req, res) => {
    try {
        const rooms = await Room.find({})
        return res.json({ rooms });
    }catch (error) {
        return res.status(400).json({ message: error });
    }
});

module.exports = router;
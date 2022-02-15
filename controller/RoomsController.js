const roomModel = require ('../models/room')

//const router = require ('../routes/api/roomsRoute');


const RoomsController ={
    addRoom: async (req, res) => {
        const {name, RentPerDay, type, description, ImageUrls,currentBookings} = req.body;
        try{
            const newRoom = new roomModel({name, RentPerDay, type, description, ImageUrls,currentBookings})
            await newRoom.save()
            if(newRoom){
                res.status(200).json({msg:"Room booked successfully"})
            }
        }catch(e){
            return  res.status(500).json({msg: e.message})
        }
    },
    updateRoom: async (req, res) => {
        const {name, RentPerDay, type, description, ImageUrls, roomId} = req.body;
        try {const room = await Book.findOneAndUpdate(
                {_id: roomId}, {$set: {name, RentPerDay, type, description, ImageUrls}})

            await room.save()
            if (room) { await res.status(200).json({msg: "update successful", room});}
        } catch(e){
            return  res.status(500).json({msg: e.message})
        }
    },
    deleteRoom: async (req, res) => {
        const {roomId} = req.body
        try{
            const room = await roomModel.deleteOne({_id: roomId})
            if (room) {
                await res.status(201).json("user successfully deleted");
            }
        } catch(e){
            return  res.status(500).json({msg: e.message})
        }
    },
    listAllRooms: async (req, res) => {
        try{
            const rooms = await roomModel.find({})
            await res.status(201).json({rooms})
        }  catch(e){
            return  res.status(500).json({msg: e.message})
        }
    }
}
module.exports =  RoomsController;
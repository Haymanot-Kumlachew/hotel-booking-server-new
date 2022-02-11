const express = require("express");
const router = express.Router();

const BookingController = require('../../controller/bookingController')
const auth = require('../../middleware/auth')

router.post('/add_reservation', BookingController.addReservation)
router.put('/update_reservation',BookingController.updateReservation)
router.delete('/delete_reservation',BookingController.deleteReservation)
router.get('/find_reservation',BookingController.getReservationInfoByBookID)
router.get('/list_user_reservations',BookingController.getReservationInfoByUserID)
router.get('/list_all_reservations',BookingController.listAllReservations)
//router.get('/list_past_reservations')

module.exports = router;
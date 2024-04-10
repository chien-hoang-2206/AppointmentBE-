const express = require('express')

const bookingController = require('../controllers/bookingController')

const router = express.Router()
// Danh sách toàn bộ lượt booking 
router.get('/', bookingController.getListBooking)
// Chi tiết booking (generic parameterized route)
// router.get('/:id', bookingController.getDetailBooking)
// cập nhật booking
router.put('/:id', bookingController.updateBooking)
// Tạo booking
router.post('/', bookingController.createBooking)





// // danh sách lịch sử  booking của 1 user
// router.get('/user/:id', bookingController.getHistoryBookingUser)

// // danh sách yêu cầu booking của pgt
// router.get('/pgt/:id', bookingController.getListRequestBooking)

// // List  booking  của 1 pgt
// router.post('/pgt/:id', bookingController.getBookingListOfPgt)

// // check time
// router.post('/time', bookingController.checkTimeBookingPgt)

// // xóa booking
// router.delete('/:id', bookingController.deleteBooking)

// // Danh sách toàn bộ lượt booking (specific route)
// router.get('/chart', bookingController.getChart)
// router.get('/top', bookingController.getTopBookingPgt)
module.exports = router;

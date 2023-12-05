import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { collection, getDoc, query, orderBy, limit }from "firebase/firestore"
import { db } from "../firebase.config"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

function Slider() {
  return (
    <div>Slider</div>
  )
}

export default Slider
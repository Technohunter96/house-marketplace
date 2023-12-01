import { useEffect, useState, useRef } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"

// používáme export const, protože chceme exportovat více hodnot: "return {loggedIn, checkingStatus}"
export const useAuthStatus = () => {
   const [loggedIn, setLoggedIn] = useState(false)
   const [checkingStatus, setCheckingStatus] = useState(true)
   const isMounted = useRef(true)

   // Zjistíme jestli je někdo přihlášený, checkingStatus je Loading
   useEffect(() => {
      if (isMounted) {
         const auth = getAuth()
         onAuthStateChanged(auth, (user) => {
            if (user) {
               setLoggedIn(true)
            }
            setCheckingStatus(false)
         })
      }

      return () => { // kvůli memory leaku, viz. odkaz níže
         isMounted.current = false
      }
   }, [isMounted])

   return { loggedIn, checkingStatus }
}

// Protected routes in v6
// https://stackoverflow.com/questions/65505665/protected-route-with-firebase

// Fix memory leak warning
// https://stackoverflow.com/questions/59780268/cleanup-memory-leaks-on-an-unmounted-component-in-react-hooks

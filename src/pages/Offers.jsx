import { useEffect, useState } from "react"
import {
   collection,
   getDocs,
   query,
   where,
   orderBy,
   limit,
   startAfter,
} from "firebase/firestore"
import { db } from "../firebase.config"
import { toast } from "react-toastify"
import Spinner from "../components/Spinner"
import ListingItem from "../components/ListingItem"

function Offers() {
   const [listings, setListings] = useState(null)
   const [loading, setLoading] = useState(true)
   const [lastFetchedListing, setLastFetchedListing] = useState(null)

   useEffect(() => {
      const fetchListings = async () => {
         try {
            // Get a reference
            const listingsRef = collection(db, "listings")

            // Create a query
            const q = query(
               listingsRef,
               where("offer", "==", true),
               orderBy("timestamp", "desc"),
               limit(10)
            )

            // Execute query
            const querySnap = await getDocs(q)

            const lastVisible = querySnap.docs[querySnap.docs.length - 1]
            setLastFetchedListing(lastVisible)

            let listings = []
            querySnap.forEach((doc) => {
               return listings.push({
                  id: doc.id,
                  data: doc.data(),
               })
            })

            setListings(listings)
            setLoading(false)
         } catch (error) {
            toast.error("Could not fetch listings")
         }
      }

      fetchListings()
   }, [])

   // Pagination / Load More after lastFetchedListing
   const onFetchMoreListings = async () => {
      try {
         // Get a reference
         const listingsRef = collection(db, "listings")

         // Create a query
         const q = query(
            listingsRef,
            where("offer", "==", true),
            orderBy("timestamp", "desc"),
            startAfter(lastFetchedListing),
            limit(10)
         )

         // Execute query
         const querySnap = await getDocs(q)

         const lastVisible = querySnap.docs[querySnap.docs.length - 1]
         setLastFetchedListing(lastVisible)

         let listings = []
         querySnap.forEach((doc) => {
            return listings.push({
               id: doc.id,
               data: doc.data(),
            })
         })

         setListings((prevState) => [...prevState, ...listings])
         setLoading(false)
      } catch (error) {
         toast.error("Could not fetch listings")
      }
   }

   return (
      <div className="category">
         <header>
            <p className="pageHeader">Offers</p>
         </header>

         {loading ? (
            <Spinner />
         ) : listings && listings.length > 0 ? (
            <>
               <main>
                  <ul className="categoryListings">
                     {listings.map((listing) => (
                        <ListingItem
                           key={listing.id}
                           listing={listing.data}
                           id={listing.id}
                        />
                     ))}
                  </ul>
               </main>

               <br />
               <br />

               {/* Loading more listings */}
               {lastFetchedListing && (
                  <p className="loadMore" onClick={onFetchMoreListings}>
                     Load More
                  </p>
               )}
            </>
         ) : (
            <p>There are no current offers</p>
         )}
      </div>
   )
}

export default Offers

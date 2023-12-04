import { Link } from "react-router-dom"
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg"
import bedIcon from "../assets/svg/bedIcon.svg"
import bathtubIcon from "../assets/svg/bathtubIcon.svg"

function ListingItem({ listing, id, onDelete }) {
   return (
      <li className="categoryListing">
         <Link
            to={`/category/${listing.type}/${id}`}
            className="categoryListingLink"
         >
            {listing.imgUrls && listing.imgUrls.length > 0 ? (
               <img
                  src={listing.imgUrls[0]}
                  alt={listing.name}
                  className="categoryListingImg"
               />
            ) : (
               <p>No image available</p>
            )}
            <div className="categoryListingDetails">
               <p className="categoryListingLocation">{listing.location}</p>
               <p className="categoryListingName">{listing.name}</p>
               <p className="categoryListingPrice">
                  $
                  {listing.offer
                     ? listing.discountedPrice
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                     : listing.discountedPrice
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  {listing.type === "rent" && " / Month"}
               </p>
               <div className="categoryListingInfoDiv">
                  <img src={bedIcon} alt="bed" />
                  <p className="categoryListingInfoText">
                     {listing.bedrooms > 1
                        ? `${listing.bedrooms} Bedrooms`
                        : "1 Bedroom"}
                  </p>
                  <img src={bathtubIcon} alt="bath" />
                  <p className="categoryListingInfoText">
                     {listing.bathrooms > 1
                        ? `${listing.bathrooms} Bathrooms`
                        : "1 Bathroom"}
                  </p>
               </div>
            </div>
         </Link>

         {onDelete && (
            <DeleteIcon
               className="removeIcon"
               fill="rgb(231, 66, 60)"
               onClick={() => onDelete(listing.id, listing.name)}
            />
         )}
      </li>
   )
}

export default ListingItem

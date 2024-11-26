# House Marketplace

This is a React / Firebase v9 project from the React Front To Back 2022 course.

## Usage

- Create offer
- Contact Landlord
- Register
- Log-in
- Google OAuth
- Everything is stored in Firebase Database

### Geolocation

The listings use Google geocoding to get the coords from the address field. You need to either rename .env.example to .env and add your Google Geocode API key OR in the **CreateListing.jsx** file you can set **geolocationEnabled** to "false" and it will add a lat/lng field to the form.

### Run

```bash
npm start
```

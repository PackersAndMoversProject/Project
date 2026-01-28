# 🎨 Packers & Movers – Frontend Flow Documentation

## 📌 Project Overview

This is the **Frontend application** for the **Packers & Movers Management System**.

The frontend is designed to:

* Collect user input
* Call backend REST APIs
* Display quotations, bookings, and payments
* Later integrate authentication and role-based dashboards

---

## 🛠️ Tech Stack

* **React (Vite)**
* **JavaScript / JSX**
* **Axios** (API calls)
* **React Router** (routing)
* **Material UI / Basic CSS** (UI components)

---

## 🧱 Frontend Architecture

```
UI Component → Service (API Call) → Backend API → Response → UI Update
```

---

## 🗂️ Project Structure

```
frontend
│
├── src
│   ├── components
│   │   ├── quotation
│   │   │   ├── QuotationForm.jsx
│   │   │   └── QuotationResult.jsx
│   │   │
│   │   ├── booking
│   │   │   ├── BookingForm.jsx
│   │   │   └── BookingDetails.jsx
│   │   │
│   │   ├── payment
│   │   │   ├── PaymentForm.jsx
│   │   │   └── PaymentStatus.jsx
│   │   │
│   │   └── common
│   │       ├── Navbar.jsx
│   │       └── Loader.jsx
│   │
│   ├── services
│   │   ├── quotationService.js
│   │   ├── bookingService.js
│   │   └── paymentService.js
│   │
│   ├── pages
│   │   ├── QuotationPage.jsx
│   │   ├── BookingPage.jsx
│   │   └── PaymentPage.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
└── package.json
```

---

## 🔁 Core Frontend Flow (Current Phase)

### 1️⃣ Quotation Flow (STARTING POINT)

#### User Journey

1. User opens **Quotation Page**
2. Fills quotation form:

   * Pickup & drop details
   * Goods info
   * Manpower & services
3. Clicks **Get Quotation**
4. Frontend calls backend API
5. Receives quotation details
6. Displays quotation result

---

### 📡 API Call

```
POST /api/quotations
```

### 📦 Request Body (Frontend → Backend)

```json
{
  "pickupDate": "2026-02-05",
  "pickupCity": "Pune",
  "dropCity": "Mumbai",
  "pickupAddress": "Karve Nagar, Pune",
  "dropAddress": "Andheri East, Mumbai",
  "goodsCategory": "HOUSEHOLD",
  "approximateWeightKg": 500,
  "numberOfItems": 30,
  "pickupFloor": 2,
  "dropFloor": 5,
  "liftAvailable": true,
  "vehicleType": "MEDIUM_TRUCK",
  "manpowerCount": 3,
  "packingRequired": true,
  "unpackingRequired": false,
  "insuranceRequired": false,
  "storageRequired": false,
  "specialHandling": "NONE"
}
```

---

### 📥 Response Handling

```json
{
  "quotationId": 1,
  "quotedAmount": 18000,
  "status": "CREATED"
}
```

Frontend:

* Saves `quotationId`
* Displays estimated cost
* Shows **Proceed to Booking** button

---

## 2️⃣ Booking Flow

#### User Journey

1. User clicks **Proceed to Booking**
2. Frontend sends `quotationId`
3. Backend creates booking
4. Booking details displayed

---

### 📡 API Call

```
POST /api/bookings
```

### 📦 Request Body

```json
{
  "quotationId": 1
}
```

---

### 📥 Response Handling

```json
{
  "bookingId": 10,
  "status": "CREATED"
}
```

Frontend:

* Stores bookingId
* Navigates to Payment page

---

## 3️⃣ Payment Flow

#### User Journey

1. User enters payment details
2. Clicks **Pay Now**
3. Payment status shown

---

### 📡 API Call

```
POST /api/payments
```

### 📦 Request Body

```json
{
  "bookingId": 10,
  "paymentMode": "UPI",
  "amount": 18000
}
```

---

### 📥 Response Handling

```json
{
  "paymentId": 25,
  "status": "SUCCESS"
}
```

Frontend:

* Shows confirmation
* Booking marked as paid

---

## 🧪 Frontend Testing Strategy

### Tooling

* Browser DevTools
* Network tab
* Console logs

### Testing Order

1. Quotation form submission
2. Booking creation
3. Payment submission

---

## 🚧 Temporary Constraints (Important)

* No authentication currently
* No JWT token usage
* No role-based UI
* All APIs assumed open (`permitAll()`)

---

## 🔐 Future Enhancements (Planned)

* Login / Register pages
* JWT token storage (`localStorage`)
* Role-based dashboards:

  * Customer
  * Admin
  * Driver
  * Employee
* Protected routes
* API call interceptor for token

---

## ✅ Current Frontend Status

| Feature         | Status         |
| --------------- | -------------- |
| Quotation UI    | 🔄 In progress |
| Booking UI      | 🔄 Pending     |
| Payment UI      | 🔄 Pending     |
| API Integration | ✅ Ready        |
| Authentication  | ⏸ Planned      |

---

## 🎯 Goal of Current Phase

> Build a **stable quotation → booking → payment flow**
> before adding authentication and role-based features.

---

## 📌 Notes for Other AI / Developer

* Do NOT assume login exists
* Keep forms simple
* Validate required fields only
* Focus on API integration first

---

### ✅ End of Document

# 🧠 Packers & Movers – Backend Flow Documentation

## 📌 Project Overview

This project is a **Packers & Movers Management System** backend built using:

* **Java 21**
* **Spring Boot**
* **Spring Data JPA (Hibernate)**
* **MySQL**
* **Swagger (OpenAPI)**

The backend is designed in **modular, layered architecture** and supports:

* Quotation generation
* Booking management
* Payment handling
* (Authentication & JWT planned, temporarily removed for stability)

---

## 🧱 Backend Architecture

```
Controller  →  Service  →  Repository  →  Database
```

### Layer Responsibilities

* **Controller**

  * Exposes REST APIs
  * Accepts request DTOs
  * Returns response DTOs

* **Service**

  * Contains business logic
  * Validates input
  * Coordinates entities & repositories

* **Repository**

  * Handles database operations
  * Extends JpaRepository

* **Entity**

  * Represents database tables
  * Uses JPA annotations

---

## 🗂️ Package Structure

```
com.backend
│
├── controller
│   ├── QuotationController
│   ├── BookingController
│   └── PaymentController
│
├── service
│   ├── QuotationService
│   ├── BookingService
│   └── PaymentService
│
├── serviceImpl
│   ├── QuotationServiceImpl
│   ├── BookingServiceImpl
│   └── PaymentServiceImpl
│
├── repository
│   ├── QuotationRepository
│   ├── BookingRepository
│   ├── PaymentRepository
│   ├── UserRepository
│   └── ServiceRepository
│
├── entity
│   ├── Quotation
│   ├── Booking
│   ├── Payment
│   ├── User
│   ├── Role
│   └── Service
│
├── dto
│   ├── QuotationRequestDto
│   ├── QuotationResponseDto
│   ├── BookingRequestDto
│   └── PaymentRequestDto
│
├── enums
│   ├── QuotationStatus
│   ├── BookingStatus
│   ├── PaymentStatus
│   ├── RoleName
│   └── SpecialHandlingType
│
└── Application.java
```

---

## 🔁 Core Business Flow (Current Working Flow)

### 1️⃣ Quotation Flow

#### API

```
POST /api/quotations
```

#### Flow

1. Client sends quotation details (pickup, drop, goods, manpower, etc.)
2. `QuotationController` receives request
3. `QuotationServiceImpl.createQuotation()`:

   * (Temporarily) does NOT depend on authentication
   * Calculates estimated amount
   * Creates `Quotation` entity
   * Saves it to database
4. Response returns:

   * quotationId
   * quotedAmount
   * status

#### Status Lifecycle

```
CREATED → CONFIRMED → EXPIRED
```

---

### 2️⃣ Booking Flow

#### API

```
POST /api/bookings
```

#### Flow

1. Booking is created using `quotationId`
2. `BookingServiceImpl`:

   * Fetches quotation
   * Creates booking
   * Sets booking status
3. Booking stored in DB

#### Status Lifecycle

```
CREATED → ASSIGNED → IN_TRANSIT → DELIVERED → COMPLETED
```

---

### 3️⃣ Payment Flow

#### API

```
POST /api/payments
```

#### Flow

1. Payment request sent with `bookingId`
2. `PaymentServiceImpl`:

   * Validates booking
   * Creates payment record
3. Payment stored in DB

#### Status Lifecycle

```
INITIATED → SUCCESS → FAILED
```

---

## 🗄️ Database Relationships (Simplified)

```
User        → Quotation
Service     → Quotation
Quotation   → Booking
Booking     → Payment
```

> Note:
> Authentication-based `User` linkage is **temporarily disabled** to stabilize core APIs.

---

## 🔐 Authentication & Security (Planned / Temporarily Removed)

### Planned Features

* JWT-based authentication
* Role-based access:

  * CUSTOMER
  * DRIVER
  * EMPLOYEE
  * ADMIN
* Token extracted via filter
* Logged-in user auto-attached to quotation/booking

### Current Status

* Auth & JWT removed temporarily
* Default Spring Security bypass enabled
* Focus is on **core business API stability**

---

## 🧪 API Testing

### Tool

* **Swagger UI**

### URL

```
http://localhost:8080/swagger-ui/index.html
```

### Testing Order (Important)

1. Quotation API
2. Booking API
3. Payment API

---

## 🚧 Known Temporary Adjustments

* `customerId` and `serviceId` are optional in quotation
* Service layer includes null-safe fallback logic
* Will be re-tightened once auth is restored

---

## ✅ Current Project Status

| Module              | Status                |
| ------------------- | --------------------- |
| Application startup | ✅ Working             |
| Database connection | ✅ Working             |
| Quotation API       | ✅ Working             |
| Booking API         | 🔄 Next               |
| Payment API         | 🔄 Next               |
| Authentication      | ⏸ Temporarily removed |
| JWT Security        | ⏸ Planned             |

---

## 🎯 Goal of Current Phase

> **Stabilize core business APIs first**
> Then reintroduce authentication & JWT cleanly.

---

## 📌 Notes for Other AI / Developer

* Do NOT assume authentication is active
* Do NOT enforce user context in services yet
* Treat quotation as standalone entity for now
* Follow step-by-step reintroduction of security

---

### ✅ End of Document

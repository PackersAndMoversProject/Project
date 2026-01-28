INDEX / TABLE OF CONTENTS
 
📘 PACKERS &amp; MOVERS MANAGEMENT SYSTEM
📑 COMPLETE INDEX (OVERVIEW OF ALL 8 PARTS)
1. Introduction &amp; System Understanding
1.1 Project Overview
1.2 Purpose of the Document
1.3 System Scope
1.4 High-Level System Components
2. Stakeholders &amp; User Roles
2.1 Customer
2.2 Driver
2.3 Employee / Support Staff
2.4 Admin
2.5 External Systems (OTP, Payment, Maps)
3. System Entry &amp; Authentication
3.1 System Entry Points
3.2 Login Methods (OTP / Password)
3.3 Role-Based Redirection
3.4 OTP Login Flow (Detailed)
3.5 Password Login Flow
3.6 First-Time Signup Flow
3.7 Forgot Password Flow
3.8 Authentication Failure Handling
4. Customer Module
4.1 Customer Dashboard
Dashboard layout &amp; components
Navigation &amp; summary cards
4.2 Quotation Module
Get Quote initiation
Quote request form:
Service details
Goods information
Vehicle &amp; manpower
Additional services
Contact information
Quote calculation logic
Quote display &amp; validity
4.3 Booking Module
Proceed to booking
Booking details form
Payment options
Booking confirmation &amp; invoice
4.4 Service Lifecycle
Booking status flow
Real-time tracking
Pickup &amp; delivery flow
Proof of delivery
4.5 Post-Service Actions
Invoice download
Feedback &amp; ratings
Support ticket creation
5. Driver Module
5.1 Driver Authentication &amp; Access
5.2 Driver Dashboard
Availability logic
Active &amp; upcoming jobs
5.3 Job Assignment
Admin assignment flow
Job acceptance / rejection
5.4 Trip Execution
Navigation to pickup
Pickup confirmation
In-transit tracking
Delay handling
5.5 Delivery &amp; Completion
Out for delivery
Proof of delivery
Job completion
5.6 Driver Earnings
Earnings calculation
Earnings dashboard
Payout handling
5.7 Driver Documents &amp; Support
Document upload
Verification status
Support requests
6. Employee Module
6.1 Employee Roles &amp; Permissions
6.2 Employee Dashboard
6.3 Booking Operations
Viewing bookings
Booking assistance
6.4 Document Verification
Driver document verification
Approval / rejection flow
6.5 Support Ticket Management
Ticket categories
Ticket lifecycle
Escalation handling
6.6 Refunds &amp; Adjustments
6.7 Employee Reports
6.8 Employee Profile Management
7. Admin Module
7.1 Admin Authentication &amp; Dashboard
7.2 User Management
Customers
Drivers
Employees
Admins
7.3 Role &amp; Permission Control
7.4 Driver &amp; Fleet Management
7.5 Service Configuration
7.6 Pricing Management
Distance-based pricing
Weight-based pricing
Discounts &amp; offers
7.7 Booking Control
7.8 Payment &amp; Invoice Management
7.9 Notification &amp; Communication Settings
7.10 System Settings
7.11 Audit Logs &amp; Security
8. Database Design
8.1 Database Overview
8.2 Core Entities (ER Model)
Users &amp; Roles
Customers
Drivers &amp; Vehicles
Services &amp; Pricing
Quotes &amp; Bookings
Payments &amp; Invoices
Documents
Support Tickets
Notifications
Audit Logs
8.3 Table Structures
8.4 Entity Relationships
9. API Architecture
9.1 API Layer Overview
9.2 Authentication APIs
9.3 Customer APIs
9.4 Driver APIs
9.5 Employee APIs
9.6 Admin APIs
9.7 Payment &amp; Notification APIs
9.8 API Security &amp; Validation
9.9 End-to-End Data Flow
10. UI Screens &amp; Design Mapping
Common screens
Customer screens
Driver screens
Employee screens
Admin screens
11. Development Strategy
11.1 Development Order (Phases)
11.2 Module-wise Build Plan
12. MVP vs Future Scope
MVP features
Future enhancements
13. Non-Functional Requirements
Performance
Security
Scalability
Availability
Auditability
14. Final Summary &amp; Closure
🧠 Why this index matters
You can 
justify your project structure
You can 
map UI → API → DB
You can 
answer viva / review questions confidently
You can 
start coding without confusion
If you want, next I can:
convert this index into 
college SRS format
mark 
which part answers which exam question
or help you 
start Module 1 coding
Just tell me your next move 🌱
PACKERS &amp; MOVERS MANAGEMENT SYSTEM
Functional Requirement &amp; System Documentation
(Plain Text – Detailed – Build-Ready)
📘 DOCUMENT DELIVERY MODE
This is 
one single document
Delivered 
part by part
No redesigning midway
No loss of detail
Written in 
simple, professional English
📄 PART 1 OF THE DOCUMENT
(Introduction → Stakeholders → System Scope → Authentication &amp; Entry Flow)
1. INTRODUCTION
1.1 Project Overview
The 
Packers &amp; Movers Management System
 is a comprehensive, multi-role, multi-tenant software solution designed to digitize and manage end-to-end relocation services such as house shifting, office relocation, vehicle transportation, and warehousing.
The system provides a unified platform where:
Customers can request quotations, book services, track shipments, and make payments.
Drivers can manage assigned jobs, update delivery status, and provide proof of delivery.
Employees and support staff can verify documents, manage bookings, and resolve issues.
Admins can configure pricing, manage users and fleets, monitor operations, and generate reports.
The goal of this system is to replace manual, phone-based, and fragmented operations with a structured, transparent, and scalable digital workflow.
1.2 Purpose of This Document
This document serves as a 
Functional Requirement Documentation (FRD)
 and 
System Understanding Guide
. It explains:
What the system does
Who uses it
How each role interacts with the system
What happens at each stage of the service lifecycle
This document is written in 
plain English
, so that:
Non-technical stakeholders can understand system behavior
Developers can clearly translate requirements into implementation
The project can be reviewed, evaluated, or audited without ambiguity
1.3 System Scope
The system includes the following major components:
Public Website (Customer-facing)
Mobile App or Web Portal for Drivers
Internal Portal for Employees
Admin Dashboard for Business Owners
Central Backend System with APIs
Integrated third-party services (OTP, Payment, Maps, Notifications)
The system supports 
multiple companies (tenants)
 using the same software while keeping their data isolated.
2. STAKEHOLDERS &amp; USER ROLES
The system is designed for multiple user roles. Each role has different permissions and responsibilities.
2.1 Customer (End User)
A customer is an individual or organization that wants to move goods from one location to another.
Key intentions of a customer:
Get an accurate quotation
Book a service easily
Track goods in real time
Make secure payments
Receive timely updates
Provide feedback after service completion
2.2 Driver (Transporter)
A driver is responsible for executing the physical movement of goods.
Key intentions of a driver:
View assigned jobs
Navigate to pickup and drop locations
Update shipment status
Share live location
Upload delivery proof
View earnings and job history
2.3 Employee / Support Staff
Employees handle internal operational and support activities.
Key intentions of an employee:
Verify documents
Handle customer complaints
Assist with bookings and payments
Manage warehouse or inventory (if applicable)
Coordinate between customer, driver, and admin
2.4 Admin (System Administrator / Business Owner)
An admin has full control over the system.
Key intentions of an admin:
Manage users, drivers, employees
Define services and pricing rules
Assign drivers and vehicles
Monitor bookings and payments
Generate reports and analytics
Configure system settings and integrations
2.5 External Systems (Non-human Actors)
The system also interacts with third-party services:
OTP Service (SMS / Email / WhatsApp)
Payment Gateway
Maps &amp; Distance Calculation API
Notification Services (Email, SMS, Push)
These systems are not controlled by the application but are critical to its functioning.
3. SYSTEM ENTRY POINT &amp; AUTHENTICATION FLOW
3.1 Entry Point
All users access the system through one of the following entry points:
Public Website
Mobile Application
Web Portal (for admin, employee, driver)
The first interaction always begins with 
authentication
.
3.2 Login Methods Supported
The system supports 
multiple authentication methods
 to ensure ease of access and security.
Available login options:
Email + Password
Mobile Number + OTP
Email + OTP
(Optional future scope: Social Login)
3.3 Role Selection Logic
Although users belong to different roles, the authentication system is unified.
Flow:
User enters login credentials.
System validates credentials.
System identifies user roles associated with the account.
User is redirected to the appropriate dashboard based on role:
Customer → Customer Dashboard
Driver → Driver Portal
Employee → Employee Portal
Admin → Admin Dashboard
A single person may have 
multiple roles
, but access is always 
role-based per session
.
3.4 OTP-Based Login Flow (Detailed)
User enters mobile number or email.
User clicks “Get OTP”.
System generates a time-limited OTP.
OTP is sent via:
SMS
Email
WhatsApp (if enabled)
User enters OTP.
System validates OTP:
If valid → login success
If invalid or expired → error message shown
On success:
Authentication token is generated
Session starts
User is redirected to role-based dashboard
Security rules:
OTP expires after a fixed time
Limited retry attempts
OTP records are logged for audit
3.5 Password-Based Login Flow
User enters email/phone and password.
Frontend performs basic validation (format checks).
Backend verifies encrypted password.
If valid:
Token issued
Session created
Redirect to dashboard
If invalid:
Clear error message shown
No system detail leaked
3.6 First-Time Signup Flow (Customer)
User selects “Sign Up”.
User enters:
Name
Mobile number
Email
OTP verification is performed.
Password is set (if required).
Account is created.
Welcome notification is sent.
User is redirected to Customer Dashboard.
3.7 Forgot Password Flow
User clicks “Forgot Password”.
User enters registered email or mobile number.
OTP is sent.
User verifies OTP.
User sets a new password.
Confirmation message is shown.
3.8 Authentication Failure Handling
If authentication fails, the system:
Displays clear, user-friendly messages
Does not reveal internal logic
Logs the failure for security monitoring
Examples:
“Invalid OTP”
“OTP expired”
“Incorrect password”
✅ END OF PART 1
Covered in this part:
Project introduction
Stakeholders and roles
System scope
Complete authentication and entry flow
➜ NEXT PART WILL START FROM:
Customer Dashboard → Get Quote → Quotation Generation (Full Detailed Flow)
You did great staying with this.
Before I continue to 
Part 2
, just tell me one thing:
👉 
“Continue”
I won’t change pace or depth — I’ll keep it exactly like this.
You’re doing well. Stay calm — we’re on track.
Continuing 
exactly
 from where we stopped.
📄 PART 2 OF THE DOCUMENT
(Customer Dashboard → Quotation → Booking → Service Lifecycle)
4. CUSTOMER DASHBOARD
4.1 Customer Dashboard Overview
After successful login, the customer is redirected to the 
Customer Dashboard
.
This dashboard acts as the central control panel for all customer activities.
Primary objectives of the Customer Dashboard:
Allow customers to request quotations
View ongoing and past bookings
Track shipment status
Manage profile and addresses
Access invoices and payments
Raise support tickets
4.2 Customer Dashboard Components
The dashboard includes the following sections:
Header section with user name and notifications
Quick action buttons:
“Get Quote”
“My Bookings”
“Track Shipment”
Summary cards:
Active bookings count
Completed bookings count
Pending payments
Navigation menu:
Profile
Addresses
Payments
Support
Logout
5. GET QUOTE FLOW (DETAILED)
5.1 Purpose of Quotation Module
The quotation module allows customers to receive an 
estimated cost
 before booking a service.
This estimation is based on distance, service type, goods category, manpower required, and optional add-ons.
5.2 Quote Request Initiation
From the dashboard:
Customer clicks 
“Get Quote”
System redirects to the Quote Request Form
5.3 Quote Request Form – Fields (Very Detailed)
5.3.1 Service Details Section
Fields:
Service Type (Dropdown)
Household Shifting
Office Relocation
Vehicle Transportation
Warehouse Storage
Pickup City
Drop City
Pickup Address (Detailed text field)
Drop Address (Detailed text field)
Preferred Pickup Date
Preferred Delivery Date (optional)
5.3.2 Goods Information Section
Fields:
Goods Category (Dropdown)
Furniture
Electronics
Fragile Items
Vehicles
Mixed Goods
Approximate Weight (Numeric field)
Number of Items (Numeric)
Floor Number (Pickup)
Floor Number (Drop)
Lift Availability (Yes/No)
5.3.3 Vehicle &amp; Manpower Requirements
Fields:
Vehicle Type Required
Mini Truck
Medium Truck
Large Truck
Number of Laborers Required
Packing Required (Yes/No)
Unpacking Required (Yes/No)
5.3.4 Additional Services
Fields:
Insurance Required (Yes/No)
Storage Required (Yes/No)
Special Handling Required (Checkboxes)
Fragile
High Value
Oversized
5.3.5 Contact Information
Fields:
Contact Person Name
Mobile Number
Alternate Mobile Number
Email Address
5.4 Quote Calculation Logic (Backend)
Once the form is submitted:
Distance between pickup and drop is calculated using Maps API.
Base price is selected based on service type.
Distance cost is added.
Weight-based cost is added.
Manpower cost is added.
Optional services cost is added.
Taxes (GST) are applied.
Discount logic (if any) is applied.
Final estimated quote is generated.
The system stores:
Input parameters
Generated quote
Timestamp
5.5 Quote Display to Customer
The customer is shown:
Estimated Price
Cost breakdown
Validity period of the quote
Notes and disclaimers
Buttons:
“Proceed to Book”
“Modify Details”
“Cancel”
6. BOOKING CONFIRMATION FLOW
6.1 Booking Initiation
If the customer clicks 
“Proceed to Book”
:
Quote is locked temporarily.
Booking form opens with prefilled quote data.
6.2 Booking Details Form
Additional required details:
Exact Pickup Date &amp; Time Slot
Exact Drop Date &amp; Time Slot
Goods Insurance Confirmation
Terms &amp; Conditions Acceptance (Checkbox)
6.3 Payment Options
Available payment modes:
Full Payment
Advance Payment
Pay Later (Admin-approved only)
Payment methods:
UPI
Credit/Debit Card
Net Banking
Wallet (if enabled)
6.4 Booking Confirmation
After successful payment:
Booking ID is generated.
Booking status = 
Confirmed
Invoice is generated.
Confirmation notification is sent to:
Customer
Admin
7. SERVICE LIFECYCLE &amp; STATUS FLOW
Each booking goes through the following statuses:
Booking Confirmed
Driver Assigned
Pickup Scheduled
Goods Picked Up
In Transit
Out for Delivery
Delivered
Completed
Each status change:
Is timestamped
Triggers notifications
Is visible to the customer
7.1 Real-Time Tracking
Driver shares live location
Customer sees tracking on map
Estimated arrival time is updated dynamically
7.2 Proof of Delivery
At delivery:
Driver uploads photos
Customer OTP confirmation (optional)
Delivery status marked complete
8. CUSTOMER POST-SERVICE ACTIONS
After completion:
Download invoice
Provide rating and feedback
Raise support ticket if needed
View booking history
✅ END OF PART 2
Covered in this part:
Customer Dashboard
Quote request flow
Booking flow
Service lifecycle
➜ NEXT PART WILL START FROM:
Driver Module → Job Assignment → Status Updates → Earnings
Whenever you’re ready, just say 
“Continue”
.
We’re doing this carefully — nothing is being rushed or skipped.
Good. Staying steady.
Continuing 
without changing depth or structure
.
📄 PART 3 OF THE DOCUMENT
(Driver Module → Job Assignment → Trip Execution → Earnings)
9. DRIVER MODULE OVERVIEW
9.1 Purpose of Driver Module
The 
Driver Module
 is designed to enable drivers to:
View assigned transportation jobs
Navigate pickup and drop locations
Update shipment status in real time
Share live location
Upload delivery proof
Track earnings and job history
The driver interacts with the system primarily through a 
mobile-friendly interface
 or mobile application.
9.2 Driver Login &amp; Access
Drivers log in using:
Mobile Number + OTP
Email + OTP (optional)
After login, drivers are redirected to the 
Driver Dashboard
.
Access is strictly limited to:
Assigned bookings only
Personal earnings data
Profile information
Drivers 
cannot
 view:
Other drivers’ jobs
Pricing logic
Admin-level configurations
10. DRIVER DASHBOARD
10.1 Driver Dashboard Components
The Driver Dashboard contains:
Header with driver name and availability status
Availability toggle:
Available
Busy
Offline
Active Job Card
Upcoming Jobs List
Completed Jobs History
Earnings Summary
Navigation Menu:
Profile
Documents
Earnings
Support
Logout
10.2 Driver Availability Logic
Drivers can set availability manually.
Rules:
Only 
Available
 drivers are eligible for new assignments
When a job is accepted, status auto-switches to 
Busy
After job completion, driver can set status back to 
Available
Admin can override availability if required.
11. JOB ASSIGNMENT FLOW
11.1 Assignment Initiation (Admin Side)
Admin selects a confirmed booking.
Admin assigns:
Driver
Vehicle
System checks:
Driver availability
Vehicle availability
Assignment is saved.
11.2 Driver Notification
Once assigned:
Driver receives notification (App / SMS)
Job appears in 
Active Job Card
Displayed details:
Booking ID
Pickup Address
Drop Address
Pickup Date &amp; Time
Customer Contact Info
Goods Type
11.3 Job Acceptance by Driver
Driver actions:
Accept Job
Reject Job (with reason)
If rejected:
Admin is notified
Job is reassigned
If accepted:
Booking status updates to 
Driver Assigned
12. PICKUP EXECUTION FLOW
12.1 Navigation to Pickup Location
Driver clicks “Navigate”
Map opens with route guidance
Live location tracking starts
12.2 Pickup Confirmation
At pickup:
Driver verifies customer details
Driver updates status to 
Goods Picked Up
Driver may upload:
Goods photos
Pickup confirmation note
System logs:
Timestamp
Location coordinates
13. IN-TRANSIT MANAGEMENT
13.1 Live Tracking
During transit:
Driver location is updated periodically
Customer sees live tracking
Admin can monitor route
13.2 Delay Handling
If delay occurs:
Driver selects delay reason:
Traffic
Weather
Breakdown
Other
Customer is notified automatically
14. DELIVERY FLOW
14.1 Arrival at Drop Location
Driver updates status to:
Out for Delivery
14.2 Proof of Delivery
At delivery:
Driver uploads:
Delivery photos
Signed document (if required)
Customer OTP confirmation (optional)
Driver marks status as 
Delivered
14.3 Completion
Once delivery is confirmed:
Booking status becomes 
Completed
Driver job is closed
15. DRIVER EARNINGS MODULE
15.1 Earnings Calculation
Driver earnings are calculated based on:
Distance traveled
Job type
Fixed commission
Incentives (if any)
Earnings are computed automatically after job completion.
15.2 Earnings Dashboard
Driver can view:
Total earnings
Completed jobs
Pending payouts
Paid payouts
15.3 Payout Handling
Payout methods:
Bank transfer
Wallet credit
Admin approval may be required before payout.
16. DRIVER SUPPORT &amp; DOCUMENTS
16.1 Driver Documents
Drivers upload:
Driving License
Vehicle RC
Insurance
ID Proof
Documents require admin verification.
16.2 Support Requests
Drivers can raise:
Job-related issues
Payment issues
App issues
Support tickets are routed to employees/admin.
✅ END OF PART 3
Covered in this part:
Driver login &amp; dashboard
Job assignment
Pickup, transit, delivery
Earnings and payouts
➜ NEXT PART WILL START FROM:
Employee Module → Internal Operations → Support &amp; Verification
When ready, say 
“Continue”
.
You’re handling this well — one clean layer at a time.
You’re doing great. Staying consistent.
Continuing 
without changing structure, depth, or intent
.
📄 PART 4 OF THE DOCUMENT
(Employee Module → Internal Operations → Verification → Support)
17. EMPLOYEE MODULE OVERVIEW
17.1 Purpose of Employee Module
The 
Employee Module
 is designed for internal staff who support day-to-day operations of the Packers &amp; Movers business.
Employees act as the 
operational backbone
 between:
Customers
Drivers
Admin
They do not have full system control but are responsible for execution, verification, and issue resolution.
17.2 Employee Roles (Logical Classification)
Employees may belong to one or more of the following internal roles:
Operations Executive
Support Executive
Verification Officer
Warehouse Staff (optional scope)
Access permissions depend on assigned role.
18. EMPLOYEE LOGIN &amp; DASHBOARD
18.1 Login Process
Employees log in using:
Email + Password
Email / Mobile + OTP
After authentication, they are redirected to the 
Employee Dashboard
.
18.2 Employee Dashboard Components
The Employee Dashboard includes:
Summary cards:
Active bookings
Pending verifications
Open support tickets
Task list (priority-based)
Navigation menu:
Bookings
Verifications
Support Tickets
Reports (limited)
Profile
Logout
19. BOOKING MANAGEMENT (EMPLOYEE SIDE)
19.1 Viewing Bookings
Employees can view:
All assigned bookings
Booking status
Customer and driver details
Payment status
Filters available:
Date range
Booking status
City
Assigned driver
19.2 Booking Assistance
Employees may:
Modify pickup/drop schedule (with admin approval)
Assist customer with payment issues
Reassign drivers (if authorized)
All changes are logged.
20. DOCUMENT VERIFICATION MODULE
20.1 Purpose
This module ensures 
authenticity and compliance
 of driver and vehicle documents.
20.2 Documents Requiring Verification
Driver-related documents:
Driving License
Vehicle Registration Certificate (RC)
Insurance
ID Proof
20.3 Verification Flow
Employee views pending verification list.
Employee opens document.
Employee checks:
Validity
Expiry date
Clarity
Employee marks document as:
Approved
Rejected (with reason)
Driver is notified of status.
Rejected documents require re-upload.
21. SUPPORT TICKET MANAGEMENT
21.1 Ticket Creation Sources
Support tickets can be created by:
Customers
Drivers
System (auto-generated issues)
21.2 Ticket Categories
Booking Issue
Payment Issue
Delay Complaint
Driver Behavior
Damage/Loss
App/Technical Issue
21.3 Ticket Handling Flow
Ticket is assigned to employee.
Employee reviews ticket details.
Employee communicates with:
Customer
Driver
Resolution action is taken.
Ticket is marked:
Open
In Progress
Resolved
Escalated (to admin)
All communications are logged.
22. REFUNDS &amp; ADJUSTMENTS (EMPLOYEE INVOLVEMENT)
Employees may initiate:
Partial refunds
Compensation requests
Discount adjustments
Final approval rests with admin.
23. EMPLOYEE REPORTS (LIMITED ACCESS)
Employees can view:
Daily booking summary
Support resolution statistics
Verification status reports
They 
cannot
:
Change pricing
Access financial analytics
Modify system configurations
24. EMPLOYEE PROFILE MANAGEMENT
Employees can:
Update personal details
Change password
View assigned role permissions
✅ END OF PART 4
Covered in this part:
Employee module
Booking operations
Document verification
Support handling
➜ NEXT PART WILL START FROM:
Admin Module → System Configuration → Pricing → User Management
Whenever ready, say 
“Continue”
.
We’re more than halfway through — and nothing has been lost.
Perfect. Continuing 
after Part 4
, exactly as promised.
📄 PART 5 OF THE DOCUMENT
(Admin Module → System Configuration → Pricing → User &amp; Fleet Management)
25. ADMIN MODULE OVERVIEW
25.1 Purpose of Admin Module
The 
Admin Module
 is the highest authority within the system.
Admins have complete control over configuration, operations, users, pricing, analytics, and system behavior.
Admins are typically:
Business owners
Branch managers
Super administrators
26. ADMIN LOGIN &amp; DASHBOARD
26.1 Admin Authentication
Admins log in using:
Email + Password
Two-factor authentication (optional but recommended)
26.2 Admin Dashboard Components
The Admin Dashboard includes:
KPI cards:
Total bookings
Revenue
Active drivers
Pending issues
Charts:
Daily / Monthly bookings
Revenue trends
Quick actions:
Create service
Assign driver
Manage pricing
Navigation menu:
Users
Bookings
Drivers
Vehicles
Pricing
Payments
Reports
Settings
27. USER MANAGEMENT (ADMIN)
27.1 User Types Managed by Admin
Admin can manage:
Customers
Drivers
Employees
Other Admins
27.2 User Actions Available
Admin can:
Create user
Activate / Deactivate user
Assign roles
Reset passwords
View user activity logs
27.3 Role &amp; Permission Control
Admin defines:
What each role can view
What actions each role can perform
Permissions are enforced system-wide.
28. DRIVER &amp; FLEET MANAGEMENT
28.1 Driver Management
Admin can:
View driver profiles
Approve / reject driver documents
Enable / disable driver accounts
View driver performance
28.2 Vehicle Management
Admin maintains vehicle records:
Vehicle number
Vehicle type
Capacity
Assigned driver
Availability status
Vehicles can be:
Active
Under Maintenance
Inactive
29. PRICING &amp; SERVICE CONFIGURATION
29.1 Service Definition
Admin defines services such as:
Household shifting
Office relocation
Vehicle transport
Warehousing
29.2 Pricing Parameters
Pricing can be configured based on:
Distance slabs
Weight slabs
Vehicle type
Manpower required
City-specific pricing
Peak-time pricing
29.3 Discount &amp; Offers
Admin can configure:
Promo codes
Seasonal discounts
Loyalty rewards
Rules include:
Validity
Usage limits
User eligibility
30. BOOKING CONTROL (ADMIN)
Admin can:
View all bookings
Modify booking details
Assign or reassign drivers
Cancel bookings
Apply manual adjustments
All admin actions are logged for audit.
31. PAYMENT &amp; INVOICE MANAGEMENT
31.1 Payment Monitoring
Admin can view:
Payment status
Failed transactions
Pending payments
31.2 Invoice Management
Admin can:
Generate invoices
Download invoices
Send invoices to customers
32. NOTIFICATION &amp; COMMUNICATION SETTINGS
Admin can configure:
Email templates
SMS templates
Push notification rules
Notifications are triggered on:
Booking confirmation
Status updates
Payment events
33. SYSTEM SETTINGS
Admin-level configurations include:
Tax rates
Cancellation policies
OTP settings
API keys (maps, payment)
34. AUDIT LOGS &amp; SECURITY
Admin can view:
Login history
Critical actions
Data changes
This ensures traceability and compliance.
✅ END OF PART 5
Covered in this part:
Admin dashboard
User &amp; fleet management
Pricing &amp; service configuration
Payments &amp; system settings
➜ NEXT PART WILL START FROM:
Database Design → ER Model → Tables &amp; Relationships
When you’re ready, say 
“Continue”
.
We’re now entering the 
core technical backbone
 of your project.
Staying precise. Continuing 
from exactly where Part 5 ended
.
📄 PART 6 OF THE DOCUMENT
(Database Design → ER Model → Tables → Relationships)
35. DATABASE DESIGN OVERVIEW
35.1 Purpose of Database Design
The database is designed to:
Store structured, consistent, and non-redundant data
Support multi-role access
Maintain complete booking lifecycle history
Ensure data integrity, traceability, and scalability
The database follows:
Relational Database Model
Normalized structure (up to 3NF where applicable)
Foreign-key-based relationships
36. CORE ENTITIES (HIGH-LEVEL ER VIEW)
Major entities in the system:
Users
Roles
Customers
Drivers
Employees
Vehicles
Services
Bookings
Quotes
Payments
Documents
Support Tickets
Notifications
Locations
Audit Logs
Each entity is described in detail below.
37. USER &amp; ROLE TABLES
37.1 USERS TABLE
Stores login-related information for all users.
Fields:
user_id (PK)
name
email
mobile_number
password_hash
is_active
created_at
updated_at
37.2 ROLES TABLE
Defines system roles.
Fields:
role_id (PK)
role_name
(Customer, Driver, Employee, Admin)
description
37.3 USER_ROLES TABLE
Supports multiple roles per user.
Fields:
user_role_id (PK)
user_id (FK → Users)
role_id (FK → Roles)
38. CUSTOMER-SPECIFIC TABLES
38.1 CUSTOMERS TABLE
Fields:
customer_id (PK)
user_id (FK → Users)
default_address_id
loyalty_points
created_at
38.2 CUSTOMER_ADDRESSES TABLE
Fields:
address_id (PK)
customer_id (FK)
address_line
city
state
pincode
latitude
longitude
39. DRIVER &amp; VEHICLE TABLES
39.1 DRIVERS TABLE
Fields:
driver_id (PK)
user_id (FK)
license_number
availability_status
rating
created_at
39.2 VEHICLES TABLE
Fields:
vehicle_id (PK)
vehicle_number
vehicle_type
capacity
status
39.3 DRIVER_VEHICLE_MAPPING
Fields:
mapping_id (PK)
driver_id (FK)
vehicle_id (FK)
assigned_date
40. SERVICE &amp; PRICING TABLES
40.1 SERVICES TABLE
Fields:
service_id (PK)
service_name
description
is_active
40.2 PRICING_RULES TABLE
Fields:
pricing_id (PK)
service_id (FK)
distance_min
distance_max
base_price
per_km_rate
per_kg_rate
manpower_cost
41. QUOTATION &amp; BOOKING TABLES
41.1 QUOTES TABLE
Fields:
quote_id (PK)
customer_id (FK)
estimated_cost
quote_details (JSON)
valid_till
created_at
41.2 BOOKINGS TABLE
Fields:
booking_id (PK)
quote_id (FK)
customer_id (FK)
driver_id (FK)
vehicle_id (FK)
booking_status
pickup_datetime
drop_datetime
created_at
41.3 BOOKING_STATUS_HISTORY
Fields:
status_id (PK)
booking_id (FK)
status
changed_at
42. PAYMENT &amp; INVOICE TABLES
42.1 PAYMENTS TABLE
Fields:
payment_id (PK)
booking_id (FK)
amount
payment_mode
payment_status
transaction_id
payment_date
42.2 INVOICES TABLE
Fields:
invoice_id (PK)
booking_id (FK)
invoice_number
total_amount
generated_at
43. DOCUMENT &amp; VERIFICATION TABLES
43.1 DOCUMENTS TABLE
Fields:
document_id (PK)
user_id (FK)
document_type
file_path
status
uploaded_at
44. SUPPORT &amp; COMMUNICATION TABLES
44.1 SUPPORT_TICKETS TABLE
Fields:
ticket_id (PK)
created_by (FK → Users)
category
description
status
assigned_to
created_at
44.2 NOTIFICATIONS TABLE
Fields:
notification_id (PK)
user_id (FK)
message
channel
is_read
sent_at
45. AUDIT &amp; LOGGING TABLES
45.1 AUDIT_LOGS TABLE
Fields:
log_id (PK)
user_id (FK)
action
entity
timestamp
ip_address
46. ENTITY RELATIONSHIPS (TEXTUAL ER SUMMARY)
One User → Many Roles
One Customer → Many Quotes
One Quote → One Booking
One Booking → One Driver
One Driver → One Vehicle
One Booking → Many Payments
One Booking → Many Status Updates
One User → Many Documents
One User → Many Notifications
✅ END OF PART 6
Covered in this part:
Complete database design
Entities and relationships
Logical ER structure
➜ NEXT PART WILL START FROM:
API-Level Flow → Module-wise Endpoints → Data Flow
Whenever ready, say 
“Continue”
.
You’re now holding the 
technical backbone
 of the project — clean and complete.
You’re doing great. We’re almost at the finish line now.
Continuing 
cleanly and carefully
.
📄 PART 7 OF THE DOCUMENT
(API-Level Flow → Module-wise Endpoints → Data Flow)
47. API ARCHITECTURE OVERVIEW
47.1 Purpose of API Layer
The API layer acts as the 
communication bridge
 between:
Frontend applications (Web / Mobile)
Backend services
Database
The APIs are:
REST-based
Role-protected
Token-authenticated
Versioned (v1, v2 for future expansion)
48. AUTHENTICATION APIs
48.1 Login APIs
POST 
/api/auth/login
Inputs: email/mobile, password or OTP
Output: auth token, user roles
POST 
/api/auth/send-otp
Inputs: mobile/email
Output: OTP sent confirmation
POST 
/api/auth/verify-otp
Inputs: OTP
Output: login success or failure
48.2 Password Management APIs
POST 
/api/auth/forgot-password
POST 
/api/auth/reset-password
49. CUSTOMER APIs
49.1 Quote APIs
POST 
/api/customer/quote
Create new quote
GET 
/api/customer/quote/{id}
View quote details
49.2 Booking APIs
POST 
/api/customer/booking
GET 
/api/customer/bookings
GET 
/api/customer/booking/{id}
PUT 
/api/customer/booking/cancel
49.3 Tracking APIs
GET 
/api/customer/track/{bookingId}
50. DRIVER APIs
50.1 Job APIs
GET 
/api/driver/jobs
POST 
/api/driver/job/accept
POST 
/api/driver/job/reject
50.2 Status Update APIs
POST 
/api/driver/status/update
POST 
/api/driver/location/update
51. EMPLOYEE APIs
GET 
/api/employee/bookings
GET 
/api/employee/verifications
POST 
/api/employee/verify-document
POST 
/api/employee/support/update
52. ADMIN APIs
52.1 User Management
POST 
/api/admin/user/create
PUT 
/api/admin/user/update
PUT 
/api/admin/user/disable
52.2 Pricing &amp; Services
POST 
/api/admin/service/create
PUT 
/api/admin/pricing/update
52.3 Booking Control
PUT 
/api/admin/booking/assign-driver
PUT 
/api/admin/booking/update-status
53. PAYMENT &amp; NOTIFICATION APIs
POST 
/api/payment/initiate
POST 
/api/payment/verify
POST 
/api/notification/send
54. API SECURITY &amp; VALIDATION
Token-based authentication (JWT)
Role-based access control
Input validation
Rate limiting
Logging &amp; monitoring
55. DATA FLOW SUMMARY (END-TO-END)
User performs action on UI
Frontend calls API
API validates token &amp; role
Business logic executed
Database updated
Notifications triggered
Response returned to UI
✅ END OF PART 7
Covered in this part:
API architecture
Module-wise endpoints
Security &amp; data flow
➜ NEXT PART WILL START FROM:
UI Screens List → Development Order → MVP vs Future Scope → Final Summary
Say 
“Continue”
 when ready.
You’re about to have a 
complete, submission-ready project document
.
You stayed with it — that matters.
Continuing with the 
final part
, exactly as planned.
📄 PART 8 OF THE DOCUMENT
(UI Screens → Development Order → MVP vs Future Scope → Final Closure)
56. UI SCREENS &amp; PAGE-WISE BREAKDOWN
This section lists 
all UI screens
, their purpose, and key components.
This directly answers 
“what screen do I build and what does it contain?”
56.1 Common Screens (All Roles)
Login Screen
Mobile / Email input
OTP / Password field
Get OTP button
Login button
Error messages
OTP Verification Screen
OTP input
Timer
Resend OTP
Verify button
56.2 Customer Screens
Customer Dashboard
Summary cards
Get Quote button
Active bookings list
Notifications panel
Get Quote Screen
Service details form
Goods details form
Vehicle &amp; manpower section
Additional services checkboxes
Submit button
Quote Result Screen
Cost breakdown
Estimated total
Proceed to Book button
Booking &amp; Payment Screen
Date &amp; time slot selector
Payment method selection
Pay Now button
Tracking Screen
Live map
Status timeline
Driver contact info
Booking History Screen
List of past bookings
Invoice download button
Feedback button
Profile &amp; Address Screen
Profile details
Saved addresses
Update buttons
56.3 Driver Screens
Driver Dashboard
Availability toggle
Active job card
Upcoming jobs
Job Detail Screen
Pickup &amp; drop details
Navigation button
Status update buttons
Earnings Screen
Earnings summary
Payout history
Documents Upload Screen
Upload license
Upload RC
Upload insurance
56.4 Employee Screens
Employee Dashboard
Task list
Pending verifications
Support tickets
Verification Screen
Document viewer
Approve / Reject buttons
Support Ticket Screen
Ticket details
Chat / notes
Status update dropdown
56.5 Admin Screens
Admin Dashboard
KPIs
Charts
Quick actions
User Management Screen
User list
Create / Edit user
Activate / Deactivate
Pricing Management Screen
Service list
Pricing rules
Discount config
Booking Management Screen
Booking list
Assign driver
Modify booking
Reports Screen
Booking reports
Revenue reports
Driver performance
57. DEVELOPMENT ORDER (VERY IMPORTANT)
This is the 
recommended build sequence
 to avoid rework:
Phase 1 – Foundation
Authentication &amp; roles
User management
Database setup
Phase 2 – Customer Flow
Get Quote
Booking &amp; Payment
Tracking
Phase 3 – Driver Flow
Driver dashboard
Status updates
Earnings
Phase 4 – Employee Flow
Verification
Support tickets
Phase 5 – Admin Control
Pricing
Fleet management
Reports
58. MVP vs FUTURE SCOPE
58.1 MVP (Must Have)
Customer booking &amp; tracking
Driver job execution
Admin assignment &amp; pricing
Payments
Basic reports
58.2 Future Enhancements
AI-based price prediction
Route optimization
Warehouse inventory
Chatbot support
Multi-language UI
Mobile apps (Android/iOS)
59. NON-FUNCTIONAL REQUIREMENTS
Performance: Handle concurrent bookings
Security: Encrypted data, RBAC
Scalability: Multi-city, multi-tenant
Availability: 24x7 uptime
Auditability: Logs for all actions
60. FINAL SUMMARY
This document represents a 
complete, end-to-end design
 of the
Packers &amp; Movers Management System
, covering:
Business logic
User experience
System architecture
Database design
API flow
Development roadmap
It is suitable for:
Academic project submission
System implementation
Stakeholder review
✅ END OF PART 8
✅ END OF COMPLETE DOCUMENT
🌱 IMPORTANT (please read calmly)
You 
did not lose anything
.
You now have a 
single, synchronized, build-ready system document
.
If you want next, I can:
convert this into 
college-format documentation
generate 
ER diagram text
break this into 
weekly development tasks
or help you start 
actual coding
Just tell me 
what you want next
 — one step at a time.

import axios from 'axios';

const API_URL = 'http://localhost:9090/api';
const EMAIL = "repro_" + Date.now() + "@test.com";
const PASSWORD = "password123";

async function runTest() {
    try {
        console.log(`--- Starting Test with ${EMAIL} ---`);

        // 1. Signup
        console.log("1. Signing up...");
        await axios.post(`${API_URL}/auth/register`, {
            fullName: "Repro User",
            email: EMAIL,
            password: PASSWORD,
            phone: "1234567890",
            role: ["customer"]
        });
        console.log("   Signup success.");

        // 2. Login
        console.log("2. Logging in...");
        let loginRes = await axios.post(`${API_URL}/auth/login`, { email: EMAIL, password: PASSWORD });
        let { token, userId } = loginRes.data;
        console.log(`   Login success. Token: ${token.substring(0, 10)}..., UserId: ${userId}`);

        // 3. Create Quotation
        console.log("3. Creating Quotation...");
        const quotePayload = {
            customerId: userId,
            pickupCity: "A", dropCity: "B",
            pickupAddress: "Addr A", dropAddress: "Addr B",
            serviceId: 1,
            pickupDate: "2025-01-01"
        };
        // Note: QuotationController usually doesn't need auth header if permitAll, but let's send it just in case
        let quoteRes = await axios.post(`${API_URL}/quotations`, quotePayload);
        let quoteId = quoteRes.data.quotationId;
        console.log(`   Quotation created. ID: ${quoteId}`);

        // 4. Create Booking
        console.log("4. Creating Booking...");
        let bookingRes = await axios.post(`${API_URL}/bookings/from-quotation/${quoteId}`);
        let bookingId = bookingRes.data.bookingId;
        console.log(`   Booking created. ID: ${bookingId}`);

        // 5. Verify Booking (Immediate)
        console.log("5. Verifying Booking (Immediate)...");
        let listRes1 = await axios.get(`${API_URL}/bookings/customer/${userId}`);
        console.log(`   Bookings found: ${listRes1.data.length}`);
        if (listRes1.data.length === 0) throw new Error("Booking not found immediately!");

        // 6. "Logout" (Simulate by just logging in again to get a fresh token/session check)
        console.log("6. Relogging in (Simulating persistence check)...");
        let loginRes2 = await axios.post(`${API_URL}/auth/login`, { email: EMAIL, password: PASSWORD });
        let userId2 = loginRes2.data.userId;
        console.log(`   Relogin success. UserId: ${userId2}`);

        if (userId !== userId2) {
            console.error(`   CRITICAL FAILURE: User ID changed! ${userId} -> ${userId2}`);
        }

        // 7. Verify Booking (After Relogin)
        console.log("7. Verifying Booking (After Relogin)...");
        let listRes2 = await axios.get(`${API_URL}/bookings/customer/${userId2}`);
        console.log(`   Bookings found: ${listRes2.data.length}`);

        if (listRes2.data.length > 0) {
            console.log("--- TEST PASSED: Persistence confirmed. ---");
        } else {
            console.error("--- TEST FAILED: Bookings lost! ---");
        }

    } catch (e) {
        console.error("--- ERROR ---");
        if (e.response) {
            console.error("Status:", e.response.status);
            console.error("Data:", e.response.data);
        } else {
            console.error(e.message);
        }
    }
}

runTest();

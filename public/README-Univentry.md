# UniVentry

**IoT-Based Visitor Management and Monitoring System**

A capstone project developed for the **Rizal Technological University – Mandaluyong Campus** (Institute of Computer Studies, BSIT) to replace manual visitor logbooks with a digital, QR-code-based, and camera-assisted visitor management platform.

> This capstone project was prepared and submitted by Joshua R. Cablao, Jazz Allen C. Garzon, John Marvin J. Iglesia, Hector Josh F. Lopez, and Pivick T. Lorenzo, under the advisership of Instr. Michael M. Fernandez, March 2026.

---

## 📖 Overview

Traditional visitor logbooks are slow to search, easy to falsify, and leave a "monitoring gap" the moment a guest walks past the front desk. UniVentry addresses this by giving educational institutions:

- An **online appointment / pre-registration system**, where visitors submit their details, a valid ID, and a live face scan before arriving on campus.
- A **QR-coded digital pass** generated on approval and emailed to the visitor, used by security guards to log entry and exit.
- **Camera-assisted monitoring**, where an RTSP camera feed is relayed to the browser and matched against stored visitor face data to support security staff with visibility of who is currently on campus.
- **Role-based dashboards** for Admins, Security Guards, and Department/Office staff.
- **Automated notifications** (email + SMS) for OTP verification, pass delivery, and overstay alerts.

The system was built using the **Agile methodology** and evaluated by 23 respondents (visitors, guards, IT experts, and administrators) against the **ISO/IEC 25010** software quality model, focusing on functional suitability, usability, and performance efficiency — achieving a Grand Weighted Mean of **4.13 ("Strongly Agree")**.

---

## ✨ Core Features

| Feature | Description |
|---|---|
| **Online Appointment Booking** | Visitors pre-register, provide personal details, upload a front/back ID photo, and complete an in-browser live face scan. |
| **ID Verification (OCR)** | Uploaded IDs are scanned client-side and checked against category-specific keyword rules to flag likely valid vs. fake documents. |
| **Digital QR Pass** | On approval, a QR code (encoding the booking record) is generated and emailed to the visitor as their entry pass. |
| **Guard Gate Scanner** | Security guards scan the visitor's QR at the gate to log Time-In / Time-Out and view visitor + ID details before confirming. |
| **Live Presence Monitoring** | Guards and admins can see who is currently on campus in real time. |
| **Department/Office Dashboard** | Office staff view today's visitors scheduled for their department and log transaction check-ins. |
| **Admin Dashboard** | Manage users, offices/departments, visitor categories, slot limits, and view system-wide audit trails and analytics/reports (with PDF export). |
| **IoT CCTV Integration** | Live camera feeds are streamed from the network (RTSP) into the browser to support manual and automated observation. |
| **Face Recognition Assist** | During booking, a face descriptor (not a raw photo) is generated and stored. The CCTV monitor continuously compares live camera frames against these stored descriptors to auto-identify and log recognized visitors, including loitering alerts. |
| **Overstay Alerts** | A scheduled background job detects visitors who have overstayed after their office transaction and sends them an SMS reminder to exit. |

---

## 🏗️ System Architecture

```
┌────────────────────────────┐        ┌───────────────────────────┐        ┌────────────────┐
│   Frontend (React + TS)    │  REST  │   Backend (Express + TS)  │        │    MongoDB     │
│   Vite · Tailwind CSS      │ <────> │   JWT Auth · RBAC          │ <────> │  (Mongoose ODM)│
└────────────────────────────┘        └───────────────────────────┘        └────────────────┘
         │                                       │
         │  Face capture & matching              │  Scheduled Jobs
         │  (face-api.js, client-side)            │  (node-cron: overstay monitor)
         │                                       │
         │  OCR ID verification                  │  Third-Party Services
         │  (Tesseract.js, client-side)           │  • Brevo (email/OTP)
         │                                       │  • iProg SMS (SMS gateway)
         ▼                                       ▼
┌────────────────────────────┐        ┌───────────────────────────┐
│  Live CCTV Viewer           │  WS    │  RTSP → WebSocket Relay    │
│  (JSMpeg decoding in canvas)│ <────> │  (node-rtsp-stream/FFmpeg) │ <──── IP Cameras (RTSP)
└────────────────────────────┘        └───────────────────────────┘
```

**Visitor lifecycle:**
1. Visitor books an appointment on the web app → face descriptor + ID images + OCR text are captured in-browser and submitted.
2. Backend saves the record in MongoDB, generates a QR code, and emails the digital pass via Brevo.
3. Guard scans the QR at the gate → backend validates and marks the visitor "On Campus" (Time-In).
4. While on campus, the CCTV monitoring layer can recognize the visitor's face against stored descriptors and log presence/loitering.
5. Office staff process the transaction; if the visitor overstays past the office visit, an automated SMS reminder is sent.
6. Guard scans the QR again on exit → backend marks the visitor "Completed" (Time-Out) and logs total duration.

---

## 🛠️ Tech Stack

**Frontend**
- React 19 + TypeScript, Vite
- Tailwind CSS v4
- React Router (role-based protected routing)
- Axios, React Context API, Framer Motion
- `face-api.js` (face detection/recognition), `react-webcam`
- `tesseract.js` (OCR ID verification)
- `@yudiel/react-qr-scanner` (QR scanning), `qrcode.react` (QR rendering)
- `jspdf` / `jspdf-autotable` (PDF report export)
- JSMpeg (loaded via CDN) for decoding the live camera stream

**Backend**
- Node.js + Express 5 + TypeScript
- MongoDB + Mongoose
- JWT authentication, bcrypt password hashing, custom Role-Based Access Control
- `qrcode` (server-side QR generation)
- `node-cron` (scheduled overstay-monitoring job)
- `node-rtsp-stream` (RTSP-to-WebSocket camera relay)
- `@getbrevo/brevo` (transactional email/OTP delivery)
- Custom SMS integration with the iProg SMS gateway (via Axios)

**Database**
- MongoDB (Mongoose models: Booking, User, Office, Category, CCTVLog)

**Deployment**
- Frontend: Vercel
- Backend: Railway

---

## 📁 Project Structure

```
IoT Visitor Management and Monitoring System v2/
├── Backend/
│   ├── controllers/       # Route logic (booking, users, offices, categories, audit, CCTV logs)
│   ├── model/              # Mongoose schemas
│   ├── routes/             # Express route definitions
│   ├── middlewares/        # Auth (JWT) and file-upload middleware
│   ├── services/           # Email, SMS, QR, RTSP streaming services
│   ├── jobs/                # Overstay monitoring cron job
│   └── src/server.ts        # App entry point
│
└── Frontend/
    ├── src/pages/
    │   ├── admin/           # Admin dashboard, CCTV monitor, reports, user/office/category management
    │   ├── guard/            # Gate scanner, active log, manual entry
    │   ├── office/           # Department dashboard, transaction scan, history
    │   └── context/          # Global CCTV/face-recognition context
    ├── src/components/       # Shared layout components, sidebars, background surveillance worker
    └── src/App.tsx           # Route definitions & role-based access control
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js
- A MongoDB instance (local or Atlas)
- A Brevo account (for transactional email)
- An RTSP-capable IP camera (optional — only needed for live CCTV features)

### Backend Setup
```bash
cd Backend
npm install
# configure your .env (MongoDB URI, JWT_SECRET, Brevo API key, camera URLs, etc.)
npm run dev      # starts with nodemon
```

### Frontend Setup
```bash
cd Frontend
npm install
# configure .env / .env.local (VITE_API_URL, VITE_WS_CAM_1, etc.)
npm run dev       # starts the Vite dev server
```

---

## 🎯 Objectives

1. Design and develop an online appointment system allowing visitors to pre-register, submit valid ID documentation, and schedule their purpose of visit before arriving on campus.
2. Develop a centralized database for the secure storage of visitor information, appointment records, and real-time transaction logs.
3. Integrate IoT-assisted monitoring components (networked CCTV) to support security personnel in observing visitor presence within designated areas.
4. Implement QR code–based verification as a supporting function for check-in/check-out to ensure accurate identity authentication and streamlined access control.
5. Evaluate the system's effectiveness, usability, and accessibility based on feedback from visitors, security personnel, and administrative staff.
6. Identify technical limitations and implementation challenges to guide future enhancements and institutional deployment.

---

## 👥 Stakeholders & Benefits

- **School Administration** — centralized, data-driven visibility into campus access and security policy.
- **Security Personnel** — an assistive tool for identity verification and situational awareness, reducing clerical workload.
- **Employees & Offices** — advance visibility of scheduled guests for better resource planning.
- **Visitors** — a faster, paperwork-light, and more professional check-in experience.
- **Students & Future Researchers** — a technical reference on applying IoT, NoSQL databases, and ML-assisted monitoring to real institutional problems.

---

## 📌 Notes & Limitations

- The face-recognition and OCR components run **client-side in the browser** — no separate Python/AI microservice is used; face descriptors (not raw images) are what gets stored in the database.
- The live CCTV streaming relay is designed for **on-premises/local deployment** (it requires direct RTSP camera access via FFmpeg) and is automatically disabled when the backend is running on cloud platforms like Railway.
- This system is intended as a **supportive/assistive** security tool — human security personnel remain responsible for final identity verification and access decisions.

---

## 📄 License

This project was developed as an academic capstone requirement for the Bachelor of Science in Information Technology program at Rizal Technological University. All rights reserved by the project authors unless otherwise stated.

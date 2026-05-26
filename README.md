# ticktock — Timesheet Management Application

A sleek, responsive, and premium Next.js application for logging hours, tracking tasks, and managing weekly timesheets.

---

## 🚀 Getting Started & Setup

### 1. Clone & Install Dependencies
First, install the package dependencies using npm:
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env.local` file in the root directory and define the NextAuth secret:
```env
NEXTAUTH_SECRET=your_nextauth_secret_key_here
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### 3. Run the Development Server
Start the local Next.js dev server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for Production
To build and optimize the application for production:
```bash
npm run build
npm run start
```

---

## 🔑 Mock User Credentials

To access the authenticated dashboard, use the following pre-configured credentials:

* **Email:** `admin@test.com`
* **Password:** `123456`

---

## 🛠 Tech Stack & Core Packages

* **Framework:** Next.js 16 (App Router)
* **Language:** TypeScript
* **Styling:** CSS Modules / Vanilla CSS
* **State & Forms:** React Hook Form & Zod
* **Authentication:** NextAuth.js
* **Testing:** Vitest & React Testing Library

---

## 📝 Key Features

- **Authentication Module:** Secure login with "Remember me" functionality and session control.
- **Interactive Dashboard:** 
  - Filter timesheets by status (Completed, Incomplete, Missing) or custom date ranges.
  - Sort entries dynamically by week, hours, or status.
  - Interactive pagination to traverse large sets of weekly records.
- **Detailed Weekly Overview:** Progress indicators showing hours tracked against the standard 40-hour work week.
- **Task Management (CRUD):** Live modals to add, edit, or delete task entries under specific dates.
- **Fully Responsive Layout:** Optimized mobile, tablet, and desktop interface with robust error states and loader views.
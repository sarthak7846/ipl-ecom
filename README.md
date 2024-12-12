## 🔴 Live URL : https://ipl-ecom.vercel.app/

# 🛠️ Project Setup Instructions

Follow the steps below to set up and run the project successfully. 🚀

---
## 📂 Directory Setup

1. Navigate to the **backend** folder and install dependencies:
   ```bash
   cd ./backend
   npm i
   ```
2. Navigate to the **frotend** folder and install dependencies:
   ```bash
   cd ./frontend
   npm i
   ```
## 🌐 Environment Variables

### Backend

Create a `.env` file inside the **backend** folder and add the following details:
```env
MONGO_DB_URL=<your_db_url>
JWT_SECRET=<your_jwt_secret>
PORT=<a_preferred_port>
```
### Frontend

Create a `.env` file inside the **frontend** folder and add the following details:
```env
VITE_BACKEND_URL=<backend_server_url>
```
## 🚀 Running the Project
1. Start the **Frontend**:
   
   - Navigate to the `frontend` folder:
     ```bash
     cd ./frontend
     ```
   - Run the development server:
     
     ```bash
     npm run dev
     ```
3. Start the **Backend**:
   
   - Open another terminal and navigate to the `backend` folder:
     
     ```bash
     cd ./backend
     ```
   - Start the backend server:
     
     ```bash
     npm start
     ```
## 🏏 Team Assignment Logic
Team assignment is implemented using random function which provides a random team from the available teams when the user registers.

`const iplTeam = iplTeams[Math.floor(Math.random() * 10)];` *(Gives a random number from 0 to 9 inclusive)*

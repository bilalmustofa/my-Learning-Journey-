# ChatGPT Clone

A full-stack AI chat application inspired by ChatGPT. This project combines a React frontend with an Express backend and uses Google Gemini for generating responses while storing chat history in MySQL.

## Project Overview

This application demonstrates how to build an AI-powered chat app with:

- React + Vite frontend
- Express.js backend API
- MySQL database for conversation storage
- Google Gemini API integration
- Chat UI with message history and loading states

## Tech Stack

### Frontend
- React
- Vite
- Axios
- React Markdown
- CSS Modules

### Backend
- Node.js
- Express
- MySQL2
- dotenv
- Google GenAI SDK

## Folder Structure

```bash
ChatGPT-Clone/
├── README.md
├── backend/
│   ├── .env
│   ├── index.js
│   ├── package.json
│   ├── db/
│   │   ├── db.config.js
│   │   └── schema.sql
│   └── src/
│       ├── api/
│       │   ├── main.routes.js
│       │   └── chat/
│       │       ├── chat.routes.js
│       │       ├── controller/
│       │       │   └── chat.controller.js
│       │       └── service/
│       │           └── chat.service.js
│       ├── middleware/
│       │   └── error-handler.js
│       └── utility/
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   └── src/
│       ├── App.jsx
│       ├── App.css
│       ├── main.jsx
│       ├── components/
│       ├── Data/
│       ├── pages/
│       ├── Utility/
│       └── assets/
└──
```

## Features

- Real-time chat interface
- Sends messages to backend API
- Stores conversation history in MySQL
- Uses Gemini to generate assistant responses
- Keeps recent chat context for follow-up prompts
- Displays loading state while AI is responding

## Database Setup

Create a MySQL database and table using the schema file:

```sql
CREATE TABLE IF NOT EXISTS conversations (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    role ENUM('user', 'assistant') NOT NULL,
    content TEXT NOT NULL,
    token_content INT UNSIGNED NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

## Environment Variables

Create a `.env` file inside the `backend` folder with the following values:

```env
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_DATABASE=your_db_name
GEMINI_API_KEY=your_google_gemini_api_key
GEMINI_MODEL=your_Model
```

> Replace the values with your actual database credentials and Gemini API key.

## Running the Project

### 1) Install backend dependencies

```bash
cd backend
npm install
```

### 2) Start the backend server

```bash
npm start
```

### 3) Install frontend dependencies

```bash
cd frontend
npm install
```

### 4) Start the frontend app

```bash
npm run dev
```

The frontend runs on:

```bash
http://localhost:5173
```

## API Endpoints

### Chat Routes

- GET `/api/chat/conversations`  -> fetch recent conversation history
- POST `/api/chat/conversations` -> send a question and receive AI response

Example request:

```bash
curl -X POST http://localhost:3000/api/chat/conversations \
  -H "Content-Type: application/json" \
  -d '{"question":"Hello! Can you explain AI?"}'
```

## Notes

This project is a learning-focused ChatGPT-style clone and is designed to show the architecture behind AI chat applications, including backend orchestration, prompt handling, and database persistence.


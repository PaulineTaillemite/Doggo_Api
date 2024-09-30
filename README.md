# 🐾 My Doggo Web APP

This project, inspired by a technical test during my search for an internship, is a fullstack web application for managing animals and their owners. It uses Next.js for the frontend and NestJS for the backend.

## 📂 Project Structure

- `frontend/`: Next.js application
- `backend/`: NestJS API

## 🛠️ Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MySQL

## 🚀 Installation and Launch

1. Clone the repository and navigate to the project folder.

2. **Backend (NestJS)**:
   - Install dependencies: `npm install`
   - Configure the database:
     - Create a MySQL database
     - Copy `.env.example` to `.env` and update the environment variables
   - Run migrations: `npm run migration:run`
   - Start the server: `npm run start:dev`
   - The backend server will be accessible at `http://localhost:3001`

3. **Frontend (Next.js)**:
   - Install dependencies: `npm install`
   - Launch the application: `npm run dev`
   - The frontend application will be accessible at `http://localhost:3000`

## 🌟 Features

- List of owners
- List of animals
- Owner details with their animals
- Animal details with its owner
- CRUD operations for owners and animals

## 📡 API Endpoints

- GET `/persons`: List all owners
- GET `/persons/:id`: Owner details
- GET `/persons/:id/with-animals`: Owner details with their animals
- GET `/animals`: List all animals
- GET `/animals/:id`: Animal details
- GET `/animals/:id/with-owner`: Animal details with its owner

## 🤝 Development Time

This application was developed in approximately 8 hours.



# Project Documentation

This repository contains two main folders:
- **be/**: Backend implementation
- **fe/**: Frontend implementation

---

## Backend (be/)

### Overview
The backend is a Python-based API server. It manages users and posts, providing endpoints for CRUD operations and authentication. The structure is modular, with separate folders for configuration, models, routes, and schemas.

### Structure
- **main.py**: Entry point for the backend server.
- **requirements.txt**: Python dependencies.
- **config/**: Common configuration utilities.
- **model/**: Data models (e.g., User).
- **routes/**: API route definitions (user and post routes).
- **schema/**: Data validation schemas for API requests/responses.

### Key Features
- User management (registration, login, profile)
- Post management (create, read, update, delete)
- Modular route and schema organization
- Configuration utilities for environment and common settings

### Getting Started
1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
2. Run the server:
   ```bash
   python main.py
   ```

---

## Frontend (fe/)

### Overview
The frontend is a React application built with Vite. It provides a user interface for interacting with the backend API, including user and post management, and displaying comments.

### Structure
- **src/**: Main source code
  - **api/**: API utilities and service functions
  - **assets/**: Static assets
  - **components/**: Reusable UI components (comments, common, navigation, post, user)
  - **hooks/**: Custom React hooks for data fetching
  - **pages/**: Main application pages (Feed, Users)
- **public/**: Public assets
- **index.html**: Main HTML file
- **vite.config.js**: Vite configuration
- **package.json**: Project dependencies and scripts

### Key Features
- User and post management UI
- Comment system
- Modular and reusable components
- API integration with backend
- Storybook stories for UI components

### Getting Started
1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Run the development server:
   ```bash
   pnpm run dev
   ```

---

## API Communication
The frontend communicates with the backend via RESTful API endpoints. Ensure the backend server is running before starting the frontend for full functionality.

---

## License
Specify your project license here.

---

## Contact
Add contact information or contribution guidelines here.

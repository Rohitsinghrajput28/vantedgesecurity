# SQLite Backend Configuration

## Environment Variables

Copy this to `.env` file in the backend directory:

```env
# Database
DATABASE_PATH=./data/vantedge-security.db

# Server
PORT=5000
NODE_ENV=development

# Client URL (for CORS)
CLIENT_URL=http://localhost:3000
```

## SQLite Setup

SQLite is a file-based database and requires no external server setup. The database file will be automatically created at `./data/vantedge-security.db` when the server starts.

### Benefits of SQLite:
- ✅ Zero configuration
- ✅ File-based (no separate server needed)
- ✅ Perfect for development and small applications
- ✅ Portable (single .db file)
- ✅ Built-in with Sequelize

## Installation

```bash
cd backend
npm install
```

## Running Backend

### Development (with auto-reload)
```bash
npm run dev
```

### Production
```bash
npm start
```

Server will run on `http://localhost:5000`

## API Endpoints

### Newsletter
- `POST /api/newsletter/subscribe` - Subscribe to newsletter
- `GET /api/newsletter` - Get all newsletters
- `POST /api/newsletter/unsubscribe` - Unsubscribe from newsletter

### Contact
- `POST /api/contact` - Create contact submission
- `GET /api/contact` - Get all contacts
- `GET /api/contact/:id` - Get single contact
- `PUT /api/contact/:id` - Update contact status
- `DELETE /api/contact/:id` - Delete contact

## Health Check
- `GET /api/health` - Check if server is running

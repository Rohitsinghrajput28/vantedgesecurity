# API Integration Guide

This document explains how to integrate the MongoDB backend with your React frontend components.

## Overview

The backend provides two main APIs:
- **Newsletter API**: Manage email subscriptions
- **Contact API**: Handle contact form submissions and inquiries

## API Client

The API client is located at `src/services/api.ts` and provides pre-configured fetch functions for all endpoints.

### Usage Example

```typescript
import { apiClient } from '../services/api';

// Subscribe to newsletter
const { data, error } = await apiClient.newsletter.subscribe('user@example.com');
if (error) {
  console.error('Subscription failed:', error);
} else {
  console.log('Subscribed successfully');
}

// Submit contact form
const result = await apiClient.contact.create({
  name: 'John Doe',
  email: 'john@example.com',
  company: 'ACME Corp',
  message: 'I need pentesting services',
});
```

## Component Integration Examples

### Newsletter Form in Footer

```typescript
// In Footer.tsx
import { useState } from 'react';
import { apiClient } from '../services/api';

export function Footer() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const result = await apiClient.newsletter.subscribe(email);
      
      if (result.error) {
        setMessage('Already subscribed or invalid email');
      } else {
        setMessage('Successfully subscribed! Check your email.');
        setEmail('');
      }
    } catch (err) {
      setMessage('Subscription failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleNewsletterSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Subscribing...' : 'Subscribe'}
      </button>
      {message && <p className="mt-2 text-sm">{message}</p>}
    </form>
  );
}
```

### Contact Form Component

```typescript
// In a new ContactForm.tsx
import { useState } from 'react';
import { apiClient } from '../services/api';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      const result = await apiClient.contact.create(formData);
      
      if (result.error) {
        setStatus('error');
        console.error('Form submission error:', result.error);
      } else {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
        // Clear success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      console.error('Form submission failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          disabled={loading}
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          required
          disabled={loading}
        />
      </div>
      <div>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company (optional)"
          disabled={loading}
        />
      </div>
      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message..."
          rows={5}
          required
          disabled={loading}
        />
      </div>

      {status === 'success' && (
        <p className="text-green-500">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-red-500">Failed to send message. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
```

## API Endpoints Reference

### Newsletter Endpoints

**Subscribe to Newsletter**
- **Endpoint**: `POST /api/newsletter/subscribe`
- **Body**: `{ "email": "user@example.com" }`
- **Response**: `{ "success": true, "data": { "_id": "...", "email": "...", "status": "active" } }`
- **Errors**: 
  - 400: Email already subscribed or invalid format
  - 500: Server error

**Unsubscribe**
- **Endpoint**: `POST /api/newsletter/unsubscribe`
- **Body**: `{ "email": "user@example.com" }`
- **Response**: `{ "success": true, "message": "Unsubscribed successfully" }`

**Get All Newsletters**
- **Endpoint**: `GET /api/newsletter`
- **Response**: `{ "success": true, "data": [...] }`

### Contact Endpoints

**Create Contact**
- **Endpoint**: `POST /api/contact`
- **Body**: `{ "name": "...", "email": "...", "company": "...", "message": "..." }`
- **Response**: `{ "success": true, "data": { "_id": "...", ... } }`
- **Errors**: 400: Missing required fields

**Get All Contacts**
- **Endpoint**: `GET /api/contact`
- **Response**: `{ "success": true, "data": [...] }`

**Get Single Contact**
- **Endpoint**: `GET /api/contact/:id`
- **Response**: `{ "success": true, "data": { ... } }`

**Update Contact Status**
- **Endpoint**: `PUT /api/contact/:id`
- **Body**: `{ "status": "viewed" }` (viewed or responded)
- **Response**: `{ "success": true, "data": { ... } }`

**Delete Contact**
- **Endpoint**: `DELETE /api/contact/:id`
- **Response**: `{ "success": true, "message": "Contact deleted" }`

## Environment Setup

1. **Frontend** (`.env.local`):
   ```
   VITE_API_URL=http://localhost:5000/api
   ```

2. **Backend** (`backend/.env`):
   ```
   MONGODB_URI=mongodb://localhost:27017/cybershield
   PORT=5000
   NODE_ENV=development
   CLIENT_URL=http://localhost:3000
   ```

## Running the Full Stack

1. **Start MongoDB**:
   ```bash
   # Local MongoDB
   mongod
   
   # Or with Docker
   docker run -d -p 27017:27017 --name mongodb mongo:latest
   ```

2. **Start Backend**:
   ```bash
   cd backend
   npm install
   npm run dev
   # Backend runs on http://localhost:5000
   ```

3. **Start Frontend**:
   ```bash
   npm install
   npm run dev
   # Frontend runs on http://localhost:3000
   ```

## Testing the API

### Using curl or Postman

```bash
# Test newsletter subscription
curl -X POST http://localhost:5000/api/newsletter/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'

# Test contact form
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name":"John Doe",
    "email":"john@example.com",
    "company":"ACME",
    "message":"Need pentesting"
  }'

# Test health check
curl http://localhost:5000/api/health
```

## Error Handling

All API responses follow a consistent format:

**Success Response** (2xx):
```json
{
  "success": true,
  "data": { /* response data */ }
}
```

**Error Response** (4xx, 5xx):
```json
{
  "success": false,
  "error": "Error message"
}
```

Always check `response.error` before using `response.data`.

## CORS Configuration

The backend is configured to accept requests from `http://localhost:3000`. If you deploy to a different URL, update the CORS settings in `backend/server.js`:

```javascript
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true,
}));
```

## Next Steps

1. Update **Footer.tsx** to use `apiClient.newsletter.subscribe()`
2. Create a new **ContactForm.tsx** component and add it to the landing page
3. Update **Navbar.tsx** to link to the contact form section
4. Test form submissions in development
5. Deploy backend to production (Heroku, Railway, Vercel, etc.)
6. Update API URLs for production deployment

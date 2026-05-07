# Vercel Deployment Guide for VantEdge Security

## Overview
This guide explains how to deploy VantEdge Security to Vercel. The application consists of:
- **Frontend**: React + Vite (deployed to Vercel)
- **Backend**: Express.js + SQLite (deployed to Railway or another service)

## Prerequisites
- Vercel account (https://vercel.com)
- GitHub account with the repository pushed
- Railway account (for backend) or another hosting service

---

## Frontend Deployment to Vercel

### Step 1: Connect GitHub to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Import your GitHub repository `vantedgesecurity`
4. Vercel will auto-detect it's a Vite project

### Step 2: Configure Build Settings
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Step 3: Add Environment Variables
In Vercel project settings, add under **Environment Variables**:

```
VITE_API_BASE_URL=https://your-backend-url.com/api
```

Replace `https://your-backend-url.com/api` with your actual backend API URL.

### Step 4: Deploy
Click **"Deploy"** - Vercel will automatically build and deploy your frontend.

---

## Backend Deployment Options

### Option A: Deploy to Railway (Recommended)

1. **Create Railway Account**: https://railway.app
2. **Connect GitHub**: Link your repository
3. **Create New Service**:
   - Select "GitHub Repo"
   - Choose your repository
4. **Configure Service**:
   - **Root Directory**: `backend`
   - **Start Command**: `npm run start` (or `node server.js`)
   - **Port**: 5000 (or configure via PORT env var)

4. **Add Environment Variables in Railway**:
   ```
   NODE_ENV=production
   DATABASE_URL=./data/vantedge-security.db
   PORT=5000
   ```

5. **Get Your Backend URL**: Railway will provide a public URL like `https://xxx.up.railway.app`

6. **Update Vercel Frontend**:
   - Go to Vercel → Project Settings → Environment Variables
   - Update `VITE_API_BASE_URL=https://xxx.up.railway.app/api`

### Option B: Deploy to Render

1. Go to https://render.com
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. **Settings**:
   - **Name**: vantedge-security-backend
   - **Root Directory**: backend
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
5. Add Environment Variables
6. Deploy and get your URL

---

## Local Development

To test locally:

```bash
# Terminal 1: Backend
cd backend
npm run dev

# Terminal 2: Frontend
npm run dev
```

Frontend will be at `http://localhost:3001`
Backend will be at `http://localhost:5000`

---

## Environment Variables Reference

### Frontend (.env.local or Vercel)
- `VITE_API_BASE_URL`: Backend API URL (default: http://localhost:5000/api)
- `VITE_APP_NAME`: Application name
- `VITE_APP_URL`: Frontend URL

### Backend (backend/.env.local or service env vars)
- `NODE_ENV`: Environment (development/production)
- `PORT`: Server port (default: 5000)
- `DATABASE_URL`: SQLite database path
- `CORS_ORIGIN`: Frontend URL for CORS

---

## Deployment Checklist

- [ ] GitHub repository is public/private as intended
- [ ] Both frontend and backend .env.example files are configured
- [ ] Backend is deployed and running
- [ ] Frontend environment variables are set in Vercel
- [ ] Test API calls work from production frontend
- [ ] SSL/HTTPS is working
- [ ] Domain is configured (if custom domain)
- [ ] Error monitoring is set up (optional)

---

## Troubleshooting

### Frontend blank page
- Check browser console (F12) for errors
- Verify `VITE_API_BASE_URL` is set correctly
- Check Vercel deployment logs

### API calls failing
- Verify backend is running and accessible
- Check CORS settings in backend
- Ensure API URLs in frontend match backend URL
- Check network tab in browser DevTools

### Database errors
- Ensure backend has write permissions to data directory
- Check database file path in environment variables
- Verify SQLite is properly initialized

---

## CI/CD with Vercel & GitHub

Once deployed:
- Every push to `main` branch triggers automatic deployment
- Pull request previews are created automatically
- Deployment logs are available in Vercel dashboard

---

## Next Steps

1. Set up custom domain (optional)
2. Configure SSL/TLS (automatic with Vercel)
3. Set up error monitoring (Sentry, LogRocket, etc.)
4. Configure CDN for images/assets
5. Set up analytics

For more info: https://vercel.com/docs

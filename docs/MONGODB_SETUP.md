# MongoDB Atlas Setup Issues & Solutions

## Current Issue
The backend is unable to connect to MongoDB Atlas with the error:
```
querySrv ECONNREFUSED _mongodb._tcp.vantage-security-mdb.n2gpvax.mongodb.net
```

## Solution: Whitelist IP in MongoDB Atlas

MongoDB Atlas requires your IP address to be whitelisted before connecting. Follow these steps:

### Step 1: Go to MongoDB Atlas Dashboard
1. Visit https://cloud.mongodb.com/
2. Login with your credentials (Rohitsingh28)
3. Click on your cluster "vantage-security-mdb"

### Step 2: Add Your IP to Network Access
1. In the left sidebar, find **Network Access** under Security
2. Click **"+ ADD IP ADDRESS"**
3. Choose one of these options:
   - **Add Current IP Address** (if you're on the same machine)
   - **Allow Access from Anywhere** (0.0.0.0/0) - less secure but works for development
4. Click **Confirm**

### Step 3: Test Connection
After whitelisting, try restarting the backend:
```bash
cd backend
npm run dev
```

You should see:
```
✅ MongoDB connected successfully!
🚀 Backend server running on http://localhost:5000
```

## Alternative: Use Local MongoDB

If you prefer to use a local MongoDB instead:

### Option A: Install MongoDB Community Edition
1. Download from https://www.mongodb.com/try/download/community
2. Install and start the MongoDB service
3. Update `backend/.env`:
   ```
   MONGODB_URI=mongodb://localhost:27017/cybershield
   ```

### Option B: Use Docker
```bash
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

Then update `backend/.env`:
```
MONGODB_URI=mongodb://localhost:27017/cybershield
```

## Quick Connection Test

Test if MongoDB is accessible by running:
```bash
# In PowerShell
$env:Path = $env:Path + ";C:\Program Files\nodejs"
cd "d:\VS-code\My Company\backend"
npm run dev
```

Monitor the output for either:
- ✅ `MongoDB connected successfully!` - Connection works
- ❌ `MongoDB connection failed` - Need to whitelist IP or fix URI

## Whitelist Status Checker

Your current MongoDB URI requires whitelisting for IP:
- If behind a corporate firewall: Your company's outbound IP may be different
- Check your public IP: https://whatismyipaddress.com
- Add that IP to MongoDB Atlas Network Access

## Support Resources
- MongoDB Atlas Setup: https://www.mongodb.com/docs/atlas/
- Network Access: https://www.mongodb.com/docs/atlas/security-whitelist/
- Troubleshooting: https://www.mongodb.com/docs/atlas/troubleshoot-connection/

# AI Portfolio Website - Deployment Guide

This project is built with **Vite + React** and **Tailwind CSS**. It is a static site that can be easily deployed to GitHub Pages, Vercel, or Netlify.

## 1. Running Locally
To run the project on your machine:
```bash
# Make sure you are in the ai-portfolio directory
cd ai-portfolio

# Install dependencies (if not already done)
npm install

# Start the development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.


## Troubleshooting: "npm.ps1 cannot be loaded" Error
If you see a red error about **PSSecurityException** or "running scripts is disabled" in PowerShell:

1. **Option 1 (Quick Fix):** Run this command instead:
   ```cmd
   cmd /c "npm run dev"
   ```

2. **Option 2 (Allow Scripts):** Run this command in PowerShell to temporarily allow scripts:
   ```powershell
   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
   npm run dev
   ```

## 2. Building for Production
To create an optimized production build:
```bash
npm run build
```
The output will be in the `dist/` folder.

## 3. Deploying to GitHub Pages (Recommended)
1. Initialize a git repository if you haven't:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
2. Create a repository on GitHub.
3. Push your code:
   ```bash
   git branch -M main
   git remote add origin <YOUR_REPO_URL>
   git push -u origin main
   ```
4. Configure Vite for GitHub Pages (Optional but recommended if not using a custom domain):
   - Set `base: '/your-repo-name/'` in `vite.config.js`.
5. Go to GitHub Repo Settings -> Pages -> Select `gh-pages` branch (you can use `gh-pages` package to deploy or setup a GitHub Action).

## 4. Deploying to Vercel (Easiest)
1. Go to [Vercel.com](https://vercel.com).
2. "Add New..." -> Project.
3. Import your GitHub Repository.
4. Vercel automatically detects Vite. Click **Deploy**.

## 5. Deploying to Netlify
1. Drag and drop the `dist` folder to Netlify Drop, or connect your GitHub repo.

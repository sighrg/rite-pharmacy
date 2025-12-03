# Deployment Guide: Rite Pharmacy

**Target Domain**: `rite-pharmacy.com`
**Hosting**: GitHub Pages (Free)

## Step 1: Publish to GitHub

1.  Open **GitHub Desktop**.
2.  Go to **File** > **Add Local Repository**.
3.  Choose the folder: `/Users/sai/.gemini/antigravity/playground/triple-glenn/rite-pharmacy`.
4.  Click **Add Repository**.
5.  Click **Publish repository** (top right).
    - **Name**: `rite-pharmacy`
    - **Description**: Website for Rite Pharmacy in Alma, MI.
    - **Uncheck** "Keep this code private" (GitHub Pages requires a public repo for free hosting).
    - Click **Publish Repository**.

## Step 2: Configure GitHub Pages

1.  Go to your new repository on GitHub.com (e.g., `https://github.com/sighrg/rite-pharmacy`).
2.  Click **Settings** (top tab).
3.  Click **Pages** (left sidebar).
4.  Under **Build and deployment** > **Branch**, select `main` (or `master`) and click **Save**.
5.  Under **Custom domain**, type `rite-pharmacy.com` and click **Save**.
6.  Check the box **Enforce HTTPS**.

## Step 3: Configure Squarespace DNS

1.  Log in to **Squarespace** and go to your **Domains** dashboard.
2.  Click on `rite-pharmacy.com`.
3.  Find **DNS Settings** (or "Advanced DNS").
4.  **Delete** any existing "Squarespace Defaults" records (trash can icon).
5.  **Add** the following records:

| Type      | Host  | Data / Value       |
| :-------- | :---- | :----------------- |
| **CNAME** | `www` | `sighrg.github.io` |
| **A**     | `@`   | `185.199.108.153`  |
| **A**     | `@`   | `185.199.109.153`  |
| **A**     | `@`   | `185.199.110.153`  |
| **A**     | `@`   | `185.199.111.153`  |

> [!NOTE]
> It may take 15-30 minutes for the site to go live.

## Troubleshooting

- **"Cancelled" Error**: If you see a "Cancelled" build status, ignore it. It just means a newer build started.
- **Site Not Loading**: Clear your browser cache or try opening it on your phone.

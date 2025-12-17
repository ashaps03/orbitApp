# orbitApp
Orbit is a community-driven social app designed to help people connect locally through shared interests, group chats, and real-time updates. Instead of chasing followers, Orbit focuses on meaningful interactions. It lets users join communities, create group circles, and expand their “orbit” by meeting new people in a natural, authentic way.

This guide explains how to get the project running locally using **Expo** and **Node 22**.

---

## 1. Prerequisites

Before you start, make sure you have:

- **Git** installed  
- **nvm** (Node Version Manager) installed  
- **Expo Go** app on your phone (optional, for testing on device)

If you don’t have `nvm` yet, follow the instructions here:  

## Install nvm (Node Version Manager)

Run this command to install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

Reload your terminal

Check installation:
nvm --version

## 2. Install Node 22 (npm included)

Orbit uses Node 22.21.1.

Install and activate it:
nvm install 22
nvm use 22

Verify versions:
node -v   # should show v22.21.1
npm -v    # should show 11.7.0

---

## 3. Clone the Repository

```bash
git clone <REPO_URL>
cd orbitApp
```

## 4. Install Dependencies
npm install

## 5. Environment Configuration

Make a file in repo root named `.env` containing these keys:
```
EXPO_PUBLIC_FIREBASE_API_KEY=
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=
EXPO_PUBLIC_FIREBASE_PROJECT_ID=
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
EXPO_PUBLIC_FIREBASE_APP_ID=
```

Add the Firebase Config keys to `.env`. This should NOT be committed to the repo; double check `.gitignore` contains `.env`.

## 6. Run the App (Expo)

Start the server:
npx expo start

Then choose:
w = Web
i = iOS Simulator
a = Android Emulator
Or scan the QR code with Expo Go

## 7. Git Workflow (Team Rules)

Pull latest code:
git pull origin main

Create a feature branch:
git checkout -b feature/<description>

Commit using Conventional Commits:
git add .
git commit -m "feat: add login screen UI"

Push your branch:
git push origin feature/<description>

Open a Pull Request:
- Must be reviewed by at least one team member
- No direct commits to main

## If you make a change and it is not being displayed on the app, you'll need to restart the app and run the start command again. :)
- In your terminal do command c to stop
- do the start commadn again: npx expo start
- Shake your device and click reload


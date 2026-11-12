@echo off
cd /d "%~dp0backend"
if not exist .env copy .env.example .env
call npm install
echo.
echo Backend dependencies installed.
echo Import backend\database.sql in XAMPP phpMyAdmin, then edit backend\.env.
echo Start with: npm run dev
pause

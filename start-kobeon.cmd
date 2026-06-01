@echo off
setlocal
cd /d "%~dp0"

REM --- Node/npm vinden (ook als die niet op de PATH staan) ---
where npm >nul 2>nul
if errorlevel 1 (
  if exist "C:\Program Files\nodejs\npm.cmd" set "PATH=C:\Program Files\nodejs;%PATH%"
)
where npm >nul 2>nul
if errorlevel 1 (
  echo.
  echo Node.js is niet gevonden.
  echo Installeer Node 18 of hoger via https://nodejs.org en start dit script opnieuw.
  echo.
  pause
  exit /b 1
)

REM --- Eenmalig dependencies installeren ---
if not exist "node_modules" (
  echo Eenmalig: dependencies installeren. Dit kan een paar minuten duren...
  call npm install
)

echo.
echo ============================================================
echo   Kobeon-site start op  http://localhost:3000
echo   De browser opent automatisch na enkele seconden.
echo   Stoppen: klik in dit venster en druk Ctrl+C.
echo ============================================================
echo.

REM Open de browser na 8 seconden (server is dan opgestart)
start "" cmd /c "timeout /t 8 /nobreak >nul & start http://localhost:3000"

REM Start de dev-server (blijft draaien in dit venster)
call npm run dev

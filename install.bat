@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo ========================================
echo   toruabii.ee — установка зависимостей
echo   toruabii.ee — installing dependencies
echo ========================================
echo.

if not exist "package.json" (
    echo ОШИБКА: package.json не найден. Запустите из корня проекта.
    echo ERROR: package.json not found. Run from project root.
    pause
    exit /b 1
)

echo Установка npm-пакетов / Installing npm packages...
call npm install
if errorlevel 1 (
    echo.
    echo ОШИБКА: не удалось установить зависимости!
    echo ERROR: Failed to install dependencies!
    pause
    exit /b 1
)

echo.
echo Готово! / Installation complete!
echo.
echo Запуск dev-сервера: start.bat  →  http://localhost:4322
echo Start dev server:   start.bat  →  http://localhost:4322
echo.
pause

@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo ========================================
echo   toruabii.ee — сборка / production build
echo   toruabii.ee — building for production
echo ========================================
echo.

if not exist "package.json" (
    echo ОШИБКА: package.json не найден. Запустите из корня проекта.
    echo ERROR: package.json not found. Run from project root.
    pause
    exit /b 1
)

if not exist "node_modules" (
    echo Установка зависимостей / Installing dependencies...
    call npm install
    if errorlevel 1 (
        echo.
        echo ОШИБКА: не удалось установить зависимости!
        echo ERROR: Failed to install dependencies!
        pause
        exit /b 1
    )
    echo.
)

echo Сборка проекта / Building project...
echo.
call npm run build
if errorlevel 1 (
    echo.
    echo ОШИБКА: сборка не удалась!
    echo ERROR: Build failed!
    pause
    exit /b 1
)

echo.
echo Сборка завершена! Результат в папке dist
echo Build complete! Output is in the 'dist' folder.
echo.
echo Dev-сервер: start.bat  →  http://localhost:4322
echo Dev server:   start.bat  →  http://localhost:4322
echo.
pause

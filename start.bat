@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo ========================================
echo   toruabii.ee — запуск dev-сервера
echo   toruabii.ee — starting dev server
echo ========================================
echo.

if not exist "package.json" (
    echo ОШИБКА: package.json не найден. Запустите из корня проекта.
    echo ERROR: package.json not found. Run from project root.
    pause
    exit /b 1
)

if not exist "node_modules" (
    echo [1/2] Установка зависимостей / Installing dependencies...
    call npm install
    if errorlevel 1 (
        echo.
        echo ОШИБКА: не удалось установить зависимости!
        echo ERROR: Failed to install dependencies!
        pause
        exit /b 1
    )
    echo.
) else (
    echo [1/2] Зависимости уже установлены / Dependencies OK
    echo.
)

echo [2/2] Запуск Astro dev-сервера / Starting Astro dev...
echo.
echo Сайт: http://localhost:4322
echo Site:  http://localhost:4322
echo Остановка: Ctrl+C
echo.
call npm run dev

if errorlevel 1 (
    echo.
    echo ОШИБКА: не удалось запустить dev-сервер!
    echo ERROR: Failed to start development server!
    pause
    exit /b 1
)

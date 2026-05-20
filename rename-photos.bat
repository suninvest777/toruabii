@echo off
chcp 65001 >nul
echo ========================================
echo   SEO Photo Renaming Script
echo ========================================
echo.

cd /d "%~dp0public\photo"

echo Renaming photos for SEO optimization...
echo.

ren "photo_2_2026-01-12_17-17-35.webp" "toruabi-tallinn-avarii-remont-1.webp"
ren "photo_3_2026-01-12_17-17-35.webp" "toruabi-tallinn-sanitaartehnilised-tood-1.webp"
ren "photo_6_2026-01-12_17-17-35.webp" "toruabi-tallinn-kuttesusteemi-paigaldus-1.webp"
ren "photo_7_2026-01-12_17-17-35.webp" "toruabi-tallinn-boileri-paigaldus-1.webp"
ren "photo_8_2026-01-12_17-17-35.webp" "toruabi-tallinn-kanalisatsiooni-remont-1.webp"
ren "photo_12_2026-01-12_17-17-35.webp" "toruabi-tallinn-wc-potipaigaldus-1.webp"
ren "photo_27_2026-01-12_17-17-35.webp" "toruabi-tallinn-kuttesusteemi-renoveerimine-1.webp"
ren "photo_30_2026-01-12_17-17-35.webp" "toruabi-harjumaa-avarii-toruabi-1.webp"
ren "photo_32_2026-01-12_17-17-35.webp" "toruabi-tallinn-survepesu-1.webp"
ren "photo_33_2026-01-12_17-17-35.webp" "toruabi-tallinn-rasvapyyduri-puhastus-1.webp"
ren "photo_34_2026-01-12_17-17-35.webp" "toruabi-harjumaa-sanitaartehnilised-tood-1.webp"

echo.
echo Photos renamed successfully!
echo.
echo New names:
dir /b *.webp | findstr /v "24toruabilogo main-photo"
echo.
pause

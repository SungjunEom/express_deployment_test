cd "%~dp0\MainPage"
cmd /c "npm run build"
rmdir /s /q "%~dp0\server\build"
move "%~dp0\MainPage\build" "%~dp0\server"
cd "%~dp0\server"
node index.js
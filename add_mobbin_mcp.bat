@echo off
"%LOCALAPPDATA%\Volta\bin\claude.cmd" mcp add mobbin --scope user --transport http https://api.mobbin.com/mcp
echo Exit code: %ERRORLEVEL%
pause

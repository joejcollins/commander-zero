:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
: Project: Dot Map
: Copyright: Shropshire Council (c) 2007
: Purpose: Build private assembly ready for up load
: $Author: $
: $Date: 2009-12-10 11:02:25 +0000 (Thu, 10 Dec 2009) $
: $Revision: 92 $
: $HeadURL: https://sbp.svn.cloudforge.com/naturalshropshire/trunk/DNN/DesktopModules/SCC.DotMap/Installation/MakeDotMap.bat $
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:
: Set up the variables
:
ECHO OFF
PATH=C:\Program Files\7-Zip;C:\WINNT\system32;

SET SQL_SERVER=desktop\msde
SET SQL_USER=dnn
SET SQL_PASSWORD=dn

:
: Commence the run
:
7z u -tzip SCC_DotMap.zip @SCC_DotMapFiles.txt
pause


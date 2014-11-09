To Set Up the Development Environment
-------------------------------------

1. Check out the "head" from <http://SBP-svn.cvsdude.com/naturalshropshire/trunk>, my guess is that you have done this already otherwise you wouldn't be reading this file.  It is probably best to check it out to C:\Inetpub\wwwroot\dotmap.  If you use "My Documents" it harder to set up the database and DotNetNuke can complain about missing objects due to the depth of the directory structure.

2. Unzip the contents of "DNN.zip" into the directory \DNN.  Don't overwrite the Default.aspx or the web.config.

3. Use "inetmgr" to make the directory \DNN a web application called http://localhost/Dnn (If you are using IIS 7, use the "Classic .NET AppPool").

4. Use windows explorer to allow "Everyone" Full Control access to the directory (I know you could probably manage with reduced access but this removes any doubt about sufficient rights).

5. Open DNN4Module.sln and build "SCC.Modules.DotMap" and "Transfer".

6. Run the batch file \DNN\DesktopModules\SCC.DotMap\Installation\MakePA.bat (C:\Program Files\7-Zip; needs to be installed for this to run).

7. Copy the database files from \DNN\App_Data to C:\Program Files\Microsoft SQL Server\MSSQL.1\MSSQL\Data.  Then use MS SQL Server Management Studio to attach to the database file.  Rename the database "DotNetNuke". 

8. Create a server alias called "DotNetNuke" using SQL Server Configuration Manager, using something like \\DESKTOP\pipe\MSSQL$SQLEXPRESS\sql\query.

9. Create login called "DotNetNuke" and give it the password "DotNetNuke".  Then alias this login to the dbo in the database "DotNetNuke".

10. Visit the http://localhost/Dnn/ to confirm that the appliation starts the application.

11. Login as "host" with password "password".  Then upload the file \DNN\DesktopModules\SCC.DotMap\Installation\SCC_DotMap.zip using the Module Definitions page.

12. Login as "admin" with password "password" and add the "SCC Dot Map" module to a page.  You will get both the DotMap and the ListMap modules, for convenience remove the ListMap module.  Upload the sample dataset DNN\DesktopModules\SCC.DotMap\SampleUpload.csv to the "DotMap" module.





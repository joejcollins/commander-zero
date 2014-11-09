/*************************************************************************
 * Project: Dot Map
 * Copyright: Shropshire Council (c) 2007
 * Purpose: Data transfer out and then back in again.
 * $Author: $
 * $Date: 2009-12-10 11:02:25 +0000 (Thu, 10 Dec 2009) $
 * $Revision: 92 $
 * $HeadURL: https://sbp.svn.cloudforge.com/naturalshropshire/trunk/Transfer/Program.cs $
 ************************************************************************/
using System;
using System.Collections;

namespace Transfer
{
    class Program
    {
        static void Main(string[] args)
        {
            Hashtable arguments = new Hashtable();
            try
            {
                switch (args.Length)
                {
                    case 0:
                        Console.Write("Write all the data to files (yn)?");
                        string yn = Console.ReadLine();
                        if (yn == "y") 
                        {
                            Modules.ToFiles();
                        }
                        else
                        {
                            PrintUsage();
                        }
                        break;
                    case 1:

                        break;
                    case 3:
                        Sightings.FromFile(args[0].ToString(), 
                            Int32.Parse(args[1].ToString()),
                            Int32.Parse(args[2].ToString()));
                        break;
                    default:
                        PrintUsage();
                        break;
                }
            }
            catch (IndexOutOfRangeException)
            {
                PrintUsage();
            }
        }

        /// <summary>
        /// Print a suitable usage message, a suitable command line might be:
        /// 
        ///     
        /// </summary>
        private static void PrintUsage()
        {
            Console.WriteLine();
            Console.WriteLine("Useage: Transfer ([file] [module_id] [portal_id])");
            Console.WriteLine();
            Console.WriteLine("  file = file containing the records in the usual format (optional)");
            Console.WriteLine("  module_id = id of map module and source file name for inbound data (optional)");
            Console.WriteLine("  portal_id = id of the portal (usually 0 in our case (optional)");
            Console.WriteLine();
            Console.WriteLine("Examples:");
            Console.WriteLine();
            Console.WriteLine("  To download all the data and write to files");
            Console.WriteLine("    Transfer");
            Console.WriteLine();
            Console.WriteLine("  To upload data in file 'plants' to module id '34'");
            Console.WriteLine("    Transfer plants 34 0");
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="arguments"></param>
        /// <returns></returns>
        public static String TargetConnectionString(Hashtable arguments)
        {
            String connectionString = "UID=" + arguments["U"] + ";" +
                                      "Password=" + arguments["P"] + ";" +
                                      "Initial Catalog=" + arguments["C"] + ";" +
                                      "Data Source=" + arguments["S"] + ";";
            return connectionString;
        }
    }
}

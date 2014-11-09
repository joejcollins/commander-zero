<%@ Page Language="vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.Framework.DefaultPage"
    CodeFile="Default.aspx.vb" %>

<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Common.Controls" Assembly="DotNetNuke" %>
<asp:literal id="skinDocType" runat="server"></asp:literal>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml">
<head id="Head" runat="server">
    <meta id="MetaRefresh" runat="Server" name="Refresh" />
    <meta id="MetaDescription" runat="Server" name="DESCRIPTION" />
    <meta id="MetaKeywords" runat="Server" name="KEYWORDS" />
    <meta id="MetaCopyright" runat="Server" name="COPYRIGHT" />
    <meta id="MetaGenerator" runat="Server" name="GENERATOR" />
    <meta id="MetaAuthor" runat="Server" name="AUTHOR" />
    <meta name="RESOURCE-TYPE" content="DOCUMENT">
    <meta name="DISTRIBUTION" content="GLOBAL">
    <meta name="ROBOTS" content="INDEX, FOLLOW">
    <meta name="REVISIT-AFTER" content="1 DAYS">
    <meta name="RATING" content="GENERAL">
    <meta http-equiv="PAGE-ENTER" content="RevealTrans(Duration=0,Transition=1)">
    <style type="text/css" id="StylePlaceholder" runat="server">
        </style>
    <style type="text/css">
        v\:*
        {
            behavior: url(#default#VML);
        }
    </style>
    <asp:placeholder id="CSS" runat="server"></asp:placeholder>
</head>
<body id="Body" runat="server" bottommargin="0" leftmargin="0" topmargin="0" rightmargin="0"
    marginwidth="0" marginheight="0">
    <noscript>
    </noscript>
    <dnn:Form ID="Form" runat="server" ENCTYPE="multipart/form-data" style="”height: 100%;">
        <asp:Label ID="SkinError" runat="server" CssClass="NormalRed" Visible="False"></asp:Label>
        <asp:PlaceHolder ID="SkinPlaceHolder" runat="server" />
        <input id="ScrollTop" runat="server" name="ScrollTop" type="hidden">
        <input id="__dnnVariable" runat="server" name="__dnnVariable" type="hidden">
    </dnn:Form>
    <script type="text/javascript">
        var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
        document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
    </script>
    <script type="text/javascript">
        try {
            var pageTracker = _gat._getTracker("UA-6239116-2");
            pageTracker._trackPageview();
        } catch (err) { }
    </script>
</body>
</html>

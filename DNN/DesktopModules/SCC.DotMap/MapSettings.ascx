<%@ Control Language="C#" AutoEventWireup="true" CodeFile="MapSettings.ascx.cs" Inherits="SCC.Modules.DotMap.MapSettings" %>
<%@ Register TagPrefix="Portal" TagName="URL" Src="~/controls/URLControl.ascx" %>
<%@ Register TagPrefix="dnn" TagName="Label" Src="~/controls/LabelControl.ascx" %>
<table cellspacing="0" cellpadding="2" summary="Map Settings" border="0">
    <tbody>
        <tr valign="top">
            <td class="SubHead" width="175">
                <dnn:Label ID="lblGoogleKey" runat="server" ControlName="txtGoogleKey" Suffix=":"></dnn:Label>
            </td>
            <td valign="bottom">
                <asp:TextBox ID="txtGoogleKey" runat="server" Width="250px"></asp:TextBox></td>
        </tr>
        <tr valign="top">
            <td class="SubHead" colspan="2">
                If you don't yet have a Google Maps API Key, 
                <a href="http://www.google.com/apis/maps/signup.html" target="_blank">
                    click here to sign up.</a></td>
        </tr>
        <tr>
            <td class="SubHead">
                <dnn:Label ID="lblMapSize" runat="server" ControlName="txtMapSizeX" Suffix=":"></dnn:Label>
            </td>
            <td class="SubHead">
                Width:<asp:TextBox ID="txtMapWidth" runat="server" MaxLength="5" CssClass="NormalTextBox"
                    Columns="5"></asp:TextBox>&nbsp;Height:<asp:TextBox ID="txtMapHeight" runat="server"
                        MaxLength="5" CssClass="NormalTextBox" Columns="5"></asp:TextBox></td>
        </tr>
        <tr>
            <td class="SubHead">
                <dnn:Label ID="lblMapCenter" runat="server" ControlName="txtMapCenterX" Suffix=":"></dnn:Label>
            </td>
            <td class="SubHead">
                X:<asp:TextBox ID="txtMapCenterX" runat="server" MaxLength="8" CssClass="NormalTextBox"
                    Columns="8"></asp:TextBox>&nbsp;Y:<asp:TextBox ID="txtMapCenterY" runat="server"
                        MaxLength="8" CssClass="NormalTextBox" Columns="8"></asp:TextBox></td>
        </tr>
        <tr>
            <td class="SubHead">
                <dnn:Label ID="lblMapZoom" runat="server" ControlName="txtMapZoom" Suffix=":"></dnn:Label>
            </td>
            <td>
                <asp:DropDownList ID="ddlMapZoom" runat="server">
                    <asp:ListItem>8</asp:ListItem>
                    <asp:ListItem>9</asp:ListItem>
                    <asp:ListItem>10</asp:ListItem>
                    <asp:ListItem>11</asp:ListItem>
                    <asp:ListItem>12</asp:ListItem>
                    <asp:ListItem>13</asp:ListItem>
                    <asp:ListItem>14</asp:ListItem>
                    <asp:ListItem>15</asp:ListItem>
                    <asp:ListItem>16</asp:ListItem>
                    <asp:ListItem>17</asp:ListItem>
                    <asp:ListItem>18</asp:ListItem>
                    <asp:ListItem>19</asp:ListItem>
                </asp:DropDownList></td>
        </tr>
        <tr>
            <td class="SubHead">
                <dnn:Label ID="lblOutline" runat="server" ControlName="ctlOutlineURL" Suffix=":"></dnn:Label>
            </td>
            <td>
                <Portal:URL ID="ctlOutlineURL" runat="server" ShowUpLoad="true" ShowUrls="true" ShowFiles="true" ShowSecure="false" ShowNewWindow="False" ShowTabs="false" ShowUsers="False" ShowTrack="false" ShowLog="false" />
            </td>
        </tr>
        <tr>
            <td class="SubHead">
                <dnn:Label ID="lblGrid" runat="server" ControlName="chkGrid" Suffix=":"></dnn:Label>
            </td>
            <td><asp:CheckBox ID="chkGrid" runat="server" /></td>
        </tr>
    </tbody>
</table>

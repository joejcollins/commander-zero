<%@ Control Language="C#" Inherits="SCC.Modules.DotMap.ListMapEdit" CodeFile="ListMapEdit.ascx.cs"
    AutoEventWireup="true" %>
<%@ Register TagPrefix="dnn" TagName="Label" Src="~/controls/LabelControl.ascx" %>
<table>
    <tr>
        <td>
        </td>
        <td align="right">
            <asp:LinkButton ID="Linkbutton1" runat="server" BorderStyle="None" CausesValidation="False"
                CssClass="CommandButton" OnClick="cmdReturn_Click" resourcekey="cmdReturn">Return</asp:LinkButton></td>
    </tr>
    <tr valign="top">
        <td>
            <dnn:Label ID="plFileUpload" runat="server" ControlName="txtFileName" Suffix=":"></dnn:Label>
        </td>
        <td>
            <input id="txtFileName" type="file" size="40" name="txtFileName" cssclass="CommandButton"
                runat="server">
            <asp:RequiredFieldValidator ID="valFileName" runat="server" ControlToValidate="txtFileName"
                resourcekey="valFileName.ErrorMessage"></asp:RequiredFieldValidator></td>
    </tr>
    <tr valign="top">
        <td align="right">
            <asp:LinkButton ID="cmdUpload" CausesValidation="True" CssClass="CommandButton" runat="server"
                BorderStyle="None" resourcekey="cmdUpload" OnClick="cmdUpload_Click">Upload</asp:LinkButton></td>
        <td>
            <asp:LinkButton ID="cmdCancel" CausesValidation="False" CssClass="CommandButton"
                runat="server" BorderStyle="None" resourcekey="cmdCancel" OnClick="cmdCancel_Click">Cancel</asp:LinkButton></td>
    </tr>
</table>
<br />
<table>
    <tr>
        <asp:Label ID="lblSpeciesLists" runat="server" /></tr>
</table>

<%@ Control Language="C#" AutoEventWireup="false" CodeFile="DotMapSettings.ascx.cs"
    Inherits="SCC.Modules.DotMap.DotMapSettings" %>
<%@ Register Src="MapSettings.ascx" TagName="MapSettings" TagPrefix="scc" %>
<%@ Register TagPrefix="dnn" TagName="Label" Src="~/controls/LabelControl.ascx" %>
<scc:MapSettings ID="MapSettings" runat="server"></scc:MapSettings>
<table cellspacing="0" cellpadding="2" summary="Dot Map Settings" border="0">
    <tbody>
        <tr valign="top">
            <td class="SubHead">
                <dnn:Label ID="lblCutOffDate" runat="server" ControlName="txtCutOffDate" Suffix=":">
                </dnn:Label>
            </td>
            <td>
                <asp:TextBox ID="txtCutOffDate" runat="server" MaxLength="4" CssClass="NormalTextBox"
                    Columns="4"></asp:TextBox>
                <asp:RangeValidator ID="valCutOffDate" runat="server" ErrorMessage="Must be in the range 1000 to 2020"
                    ControlToValidate="txtCutOffDate" MaximumValue="2020" MinimumValue="1000" Type="Integer"></asp:RangeValidator></td>
        </tr>
        <tr valign="top">
            <td class="SubHead">
                <dnn:Label ID="lblNumberOfRows" runat="server" ControlName="txtNumberOfRows" Suffix=":">
                </dnn:Label>
            </td>
            <td>
                <asp:TextBox ID="txtNumberOfRows" runat="server" MaxLength="2" CssClass="NormalTextBox"
                    Columns="2"></asp:TextBox>
                <asp:RangeValidator ID="valRangeNumberOfRows" runat="server" ErrorMessage="Must be in the range 2 to 99"
                    ControlToValidate="txtNumberOfRows" MaximumValue="99" MinimumValue="2" Type="Integer"></asp:RangeValidator></td>
        </tr>
    </tbody>
</table>

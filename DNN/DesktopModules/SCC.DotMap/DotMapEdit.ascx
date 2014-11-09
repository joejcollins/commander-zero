<%@ Control language="C#" Inherits="SCC.Modules.DotMap.EditDotMap" CodeFile="DotMapEdit.ascx.cs" AutoEventWireup="true"%>
<%@ Register TagPrefix="dnn" TagName="Label" Src="~/controls/LabelControl.ascx" %>
<%@ Register TagPrefix="dnn" TagName="Audit" Src="~/controls/ModuleAuditControl.ascx" %>
<table>
	<tr>
		<td></td>
		<td align="right">
            <asp:LinkButton ID="Linkbutton1" runat="server" BorderStyle="None" CausesValidation="False"
                CssClass="CommandButton" OnClick="cmdReturn_Click" resourcekey="cmdReturn">Return</asp:LinkButton></td>
	</tr>
	<tr vAlign="top">
		<td><dnn:label id="plFileUpload" runat="server" controlname="txtFileName" suffix=":"></dnn:label></td>
		<td><input id="txtFileName" type="file" size="40" name="txtFileName" CssClass="CommandButton"
				runat="server">
			<asp:requiredfieldvalidator id="valFileName" runat="server" ControlToValidate="txtFileName" resourcekey="valFileName.ErrorMessage"></asp:requiredfieldvalidator></td>
	</tr>
	<tr vAlign="top">
		<td align="right"><asp:linkbutton id="cmdUpload" CausesValidation="True" CssClass="CommandButton" runat="server" BorderStyle="None"
				resourcekey="cmdUpload" OnClick="cmdUpload_Click">Upload</asp:linkbutton></td>
		<td><asp:linkbutton id="cmdCancel" CausesValidation="False" CssClass="CommandButton" runat="server"
				BorderStyle="None" resourcekey="cmdCancel" OnClick="cmdCancel_Click">Cancel</asp:linkbutton></td>
	</tr>
    <tr>
        <td align="left" colspan="2">
            <br />
            <asp:Label ID="lblInfo" runat="server"><b>How to add more sightings?</b><br />
            <p>Sightings can be uploaded in a file which must be in this format:</p>
            <code>English Name,Latin Name,2005,324600,290000<br />
            English Name,Latin Name,1999,324800,290200 </code>
            <p>or</p>
            <code>English Name,Latin Name,2005,SO636870</code>
            <p>Separated by commas but with no spaces.</p>
            <p>The fields are:</p>
            <ol>
            <li>The common or English name of the species, up to 100 characters including spaces.</li>
            <li>The Latin name of the species, up to 100 characters including spaces.</li>
            <li>The year of the sighting as 4 digits.</li>
            <li>The location of the sighting as:<br />
            <div>
            The X co-ordinate of the sighting in metres, 6 digits.<br />
            The Y co-ordinate of the sighting in metres, 6 digits.
            </div>
            or<br />
            <div>
            A six figure Ordnance Survey grid reference.
            </div>
            </li>
            </ol>
            </asp:Label>
        </td>
    </tr>
</table>

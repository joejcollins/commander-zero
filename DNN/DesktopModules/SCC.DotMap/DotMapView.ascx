<%@ Control Language="C#" Inherits="SCC.Modules.DotMap.DotMapView" CodeFile="DotMapView.ascx.cs"
    AutoEventWireup="true" %>
<%@ Register Src="Map.ascx" TagName="Map" TagPrefix="scc" %>
<%@ Register TagPrefix="dnn" TagName="Label" Src="~/controls/LabelControl.ascx" %>
<asp:Panel ID="pnlSearch" Visible="True" runat="server" Width="100%">
    <table width="100%">
        <tr>
            <td style="width: 10%;">
            </td>
            <td style="width: 40%;">
                <asp:TextBox ID="txtEnglishName" runat="server" /></td>
            <td style="width: 40%;">
                <asp:TextBox ID="txtLatinName" runat="server" /></td>
            <td style="width: 10%;">
                <asp:LinkButton ID="cmdSeach" runat="server" CssClass="CommandButton" CausesValidation="False"
                    BorderStyle="None" OnClick="cmdSearch_Click">Search</asp:LinkButton>
            </td>
        </tr>
    </table>
    <asp:DataGrid ID="grdResults" runat="server" AllowPaging="True" AutoGenerateColumns="False"
        OnDeleteCommand="grdResults_DeleteCommand" OnSelectedIndexChanged="grdResults_SelectedIndexChanged"
        OnItemCreated="grdResults_ItemCreated" OnPageIndexChanged="grdResults_PageIndexChanged"
        Width="100%">
        <HeaderStyle Font-Bold="True"></HeaderStyle>
        <Columns>
            <asp:TemplateColumn HeaderStyle-Width="10%" Visible="false">
                <ItemTemplate>
                    <asp:LinkButton ID="cmdDelete" runat="server" CssClass="CommandButton" CausesValidation="False"
                        CommandName="Delete">Delete</asp:LinkButton>
                </ItemTemplate>
            </asp:TemplateColumn>
            <asp:TemplateColumn HeaderText="English Name" HeaderStyle-Width="40%">
                <ItemTemplate>
                    <asp:Label ID="lblEnglishName" runat="server" Text='<%# DataBinder.Eval(Container, "DataItem.EnglishName") %>'></asp:Label>
                </ItemTemplate>
                <ItemStyle Font-Bold="False" Font-Italic="False" Font-Overline="False" Font-Strikeout="False"
                    Font-Underline="False" HorizontalAlign="Left" />
            </asp:TemplateColumn>
            <asp:TemplateColumn HeaderText="Latin Name" HeaderStyle-Width="40%">
                <ItemTemplate>
                    <em>
                        <asp:Label ID="lblLatinName" runat="server" Text='<%# DataBinder.Eval(Container, "DataItem.LatinName") %>'></asp:Label></em>
                </ItemTemplate>
                <ItemStyle Font-Bold="False" Font-Italic="False" Font-Overline="False" Font-Strikeout="False"
                    Font-Underline="False" HorizontalAlign="Left" />
            </asp:TemplateColumn>
            <asp:TemplateColumn HeaderStyle-Width="10%">
                <ItemTemplate>
                    <asp:LinkButton ID="cmdSelect" runat="server" CssClass="CommandButton" CausesValidation="false"
                        CommandName="Select">Map</asp:LinkButton>
                </ItemTemplate>
            </asp:TemplateColumn>
        </Columns>
        <PagerStyle CssClass="CommandButton" Position="TopAndBottom" Mode="NumericPages"></PagerStyle>
    </asp:DataGrid>
</asp:Panel>
<asp:Panel ID="pnlMap" Visible="False" runat="server" Width="100%">
    <table width="100%">
        <tr>
            <td style="width: 50%">
                <span class="Head">
                    <asp:Label ID="lblEnglishName" runat="server">EnglishName</asp:Label>
                    <em>(<asp:Label ID="lblLatinName" runat="server">LatinName</asp:Label>)</em></span></td>
            <td style="text-align: right">
                <asp:LinkButton ID="cmdReturn" runat="server" CssClass="CommandButton" CausesValidation="False"
                    BorderStyle="None" resourcekey="cmdReturn" OnClick="cmdReturn_Click">Return to Search</asp:LinkButton></td>
        </tr>
        <tr>
            <td colspan="2">
                <scc:Map ID="Map" IsSpeciesWSOn="true" IsCountyRecordsWSOn="false" IsBapWSOn="false" IsNbnWSOn="false" runat="server" />
            </td>
        </tr>
    </table>
</asp:Panel>

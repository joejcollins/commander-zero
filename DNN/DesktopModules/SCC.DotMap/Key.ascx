<%@ Control Language="C#" AutoEventWireup="true" CodeFile="Key.ascx.cs" Inherits="SCC.Modules.DotMap.Key" %>
<%@ Register TagPrefix="scc" TagName="Label" Src="LabelControl.ascx" %>
<asp:Panel ID="pnlSelectedTetrad" Visible="true" runat="server">
    <asp:Image ID="imgSelectedTetrad" Width="20" Height="20" runat="server" ImageUrl="~/DesktopModules/SCC.DotMap/TetradSelected.png" />
    <scc:Label ID="lblSelectedTetrad" runat="server" />
</asp:Panel>
<asp:Panel ID="pnlGrid" Visible="false" runat="server">
    <asp:Image ID="imgGrid" Width="20" Height="20" runat="server" ImageUrl="~/DesktopModules/SCC.DotMap/Grid.png" />
    <scc:Label ID="lblGrid" runat="server" />
</asp:Panel>
<asp:Panel ID="pnlBefore" Visible="false" runat="server">
    <asp:Image ID="imgBefore" Width="20" Height="20" runat="server" ImageUrl="~/DesktopModules/SCC.DotMap/TetradBefore.png" />
    <scc:Label ID="lblBefore" runat="server" />
</asp:Panel>
<asp:Panel ID="pnlAfter" Visible="false" runat="server">
    <asp:Image ID="imgAfter" Width="20" Height="20" runat="server" ImageUrl="~/DesktopModules/SCC.DotMap/TetradAfter.png" />
    <scc:Label ID="lblAfter" runat="server" />
</asp:Panel>
<asp:Panel ID="pnlNoDate" Visible="false" runat="server">
    <asp:Image ID="imgNoDate" Width="20" Height="20" runat="server" ImageUrl="~/DesktopModules/SCC.DotMap/TetradAfter.png" />
    <scc:Label ID="lblNoDate" runat="server" />
</asp:Panel>


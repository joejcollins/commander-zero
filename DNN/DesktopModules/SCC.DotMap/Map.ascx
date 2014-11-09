 <%@ Import Namespace="SCC.Modules.DotMap" %>
<%@ Control Language="C#" AutoEventWireup="true" CodeFile="Map.ascx.cs" Inherits="SCC.Modules.DotMap.Map" %>
<%@ Register TagPrefix="scc" Src="Key.ascx" TagName="Key" %>
<style>
    .root div
    {
        display: none;
        margin-left: 1em;
    }
</style>
<table width="100%">
    <tr>
        <td style="text-align: left; vertical-align: top;" class="Normal">
            <div id="MapCanvas" runat="server">
            </div>
            <table width="100%">
                <tr class="Normal">
                    <td>
                        Crosshair Grid Reference: <span runat="server" id="CursorLocation"></span>
                    </td>
                    <td align="right">
                        <asp:HyperLink runat="server" ID="LinkToMap">Link to this map</asp:HyperLink>
                    </td>
                </tr>
            </table>
        </td>
        
        <td style="text-align: left; vertical-align: top; width: 900px">
            <div class="Head">Place or Postcode</div>
            <input type="text" id="txtPostcode" size="15" runat="server" onkeypress="javascript:return filterEnterKeyPress(event);" />
            <asp:LinkButton ID="btnPostcode" runat="server" CssClass="CommandButton" CausesValidation="false"
                BorderStyle="None" OnClientClick="return false;">Search</asp:LinkButton>
            <br />
            <br />
            <div class="Head">Key</div>
            <scc:Key ID="Key" runat="server" />
            <br />
            <div class="Head">
                Information<span id="spnWaiting" style="visibility: hidden">
                    <asp:Image ID="imgIndicator" runat="server" ImageUrl="~/DesktopModules/SCC.DotMap/Indicator.gif" />
                </span>
            </div>
            <div id="Information" class="Normal">
                <div id="MapNote" runat="server">
                    Click on the map...
                </div>
                <div id="SpeciesWsResponse" runat="server">
                </div>
                <div id="CountyRecordsWsResponse" runat="server">
                </div>
                <div id="BapWsResponse" runat="server">
                </div>
                <div id="NbnWsResponse" runat="server">
                </div>
            </div>
        </td>
    </tr>
</table>

<script type="text/javascript">    
//<![CDATA[

// Uniquely named MakeMap function, so that it can be called from the control's
// code behind without interfering with other instances of the same control.
function MakeMap<%=this.ClientID%>(){
    var map = new dotMap(document.getElementById("<%= this.MapCanvas.ClientID %>"));
    //Map state
    map.gridX = <%= this.MapCenter.GridX %>; 
    map.gridY = <%= this.MapCenter.GridY %>; 
    map.zoomLevel = <%= this.ZoomLevel %>; 
    //Map features
    map.isGridOn = <%= this.Grid.ToString().ToLower() %>; 
    map.outline = '<%= this.Outline %>'; 
    map.dots = eval('(<%= this.Dots %>)'); 
    map.cutOffYear = <%= this.CutOffYear %>; 
    //Map notes  
    map.isSpeciesWSOn = <%= this.IsSpeciesWSOn.ToString().ToLower() %>; 
    map.isCountyRecordsWSOn = <%= this.IsCountyRecordsWSOn.ToString().ToLower() %>; 
    map.isBapWSOn = <%= this.IsBapWSOn.ToString().ToLower() %>; 
    map.isNbnWSOn = <%= this.IsNbnWSOn.ToString().ToLower() %>; 
    //Make the map
    map.make();
}   

// If the enter key is pressed, then click the first button on the page,
// Usually this is the search button.
function filterEnter() {
    alert();
    if (event.keyCode == 13) {
        document.form.button1.click();
        return false;
    }
}

//]]>    

</script>


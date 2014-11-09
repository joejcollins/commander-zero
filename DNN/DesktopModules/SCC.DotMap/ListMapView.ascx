<%@ Control Language="C#" Inherits="SCC.Modules.DotMap.ViewDotMap" CodeFile="ListMapView.ascx.cs"
    AutoEventWireup="true" %>
<%@ Register Src="Map.ascx" TagName="Map" TagPrefix="scc" %>
<%@ Register TagPrefix="dnn" TagName="Label" Src="~/controls/LabelControl.ascx" %>
<%@ Register TagPrefix="dnn" TagName="Audit" Src="~/controls/ModuleAuditControl.ascx" %>
<scc:Map ID="Map" IsSpeciesWSOn="false" IsCountyRecordsWSOn="true" IsBapWSOn="true" IsNbnWSOn="true" runat="server" />

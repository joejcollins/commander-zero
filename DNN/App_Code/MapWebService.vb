'************************************************************************
' Project: Dot Map
' Copyright: Joe Collins (c) 2007
' Purpose: The map webservice uses inline script because if it uses 
'   code behind it has to be in VB.NET and go in the App_code, and this
' we no like.   
' $Author: sbp-collins $
' $Date: 2009-04-02 20:21:29 +0100 (Thu, 02 Apr 2009) $
' $Revision: 76 $
' $HeadURL: https://sbp.svn.cloudforge.com/naturalshropshire/trunk/DNN/App_Code/MapWebService.vb $
'***********************************************************************
Imports System
Imports System.Text
Imports System.Web.Services
Imports SCC.Modules.DotMap
Imports System.Collections.Generic
Imports SCC.Modules.DotMap.Data
Imports SCC.Modules.DotMap.Nbn
Imports SCC.Modules.DotMap.NbnGateway
Imports System.Xml
Imports System.Xml.Serialization

<WebService(Namespace:="http://naturalshropshire.org.uk/")> _
<WebServiceBinding(ConformsTo:=WsiProfiles.BasicProfile1_1)> _
<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Public Class MapWebService
    Inherits System.Web.Services.WebService

    <WebMethod()> _
    Public Function HelloWorld() As String
        Return "Hello World"
    End Function

    <WebMethod(CacheDuration:=43200)> _
    Public Function SpeciesUpdate(ByVal gridX As Integer, ByVal gridY As Integer, ByVal ln As String) _
        As String
        Dim builder As New StringBuilder()
        Dim objDotMap As New DotMapController()
        Dim infoTetrad As InfoSighting = objDotMap.SpeciesForTetrad(ln, gridX, gridY)
        builder.Append("<div class='SubHead'>County Recorder Sighting Data</div>")
        If infoTetrad Is Nothing Then
            builder.Append(objDotMap.EnglishName(ln) & " <em>(" + ln + ")</em> " & _
                           "has not been seen in this tetrad.")
        Else
            builder.Append(infoTetrad.EnglishName + " <em>(" & infoTetrad.LatinName + ")</em> " & _
                           "was last seen in this tetrad in " & infoTetrad.YearSeen.ToString() + ".")
        End If
        builder.Append("</div>")
        Return builder.ToString()
    End Function 'SpeciesUpdate

    ' Return County Records for about a tetrad.  This is done by
    ' getting all the modules in the portal and building a species list.
    <WebMethod(CacheDuration:=43200)> _
    Public Function CountyRecordsUpdate(ByVal gridX As Integer, ByVal gridY As Integer) _
    As String
        Dim portalAliasInfo As PortalAliasInfo = PortalSettings.GetPortalAliasInfo(Me.HostName)
        Dim portalId As Integer = portalAliasInfo.PortalID
        Dim objDotMap As New DotMapController()
        Dim modules As ArrayList = objDotMap.ModuleList(portalId)
        Dim builder As New StringBuilder()
        builder.Append("<div class='SubHead'>County Recorder Data</div>")
        Dim infoModule As InfoModule
        For Each infoModule In modules
            Dim speciesList As ArrayList = objDotMap.ListSpeciesForTetrad(gridX, gridY, infoModule.ModuleId)
            If speciesList.Count >= 1 Then
                builder.Append(("<div class='root'><a href='' onclick='toggleNode(this.parentNode); return false;'>" & infoModule.ModuleTitle & " (" & speciesList.Count.ToString() & ")</a>"))
                Dim species As InfoSighting
                For Each species In speciesList
                    builder.Append(("<div>" & species.EnglishName.Replace("'", "&#39;") & " <em>(" & species.LatinName & ")</em> " & species.YearSeen & "</div>"))
                Next species
                builder.Append("</div>")
            End If
        Next infoModule
        If Not builder.ToString().Contains("<div class='root'>") Then ' No records have been added.
            builder.Append("<div>No records for this tetrad</div>")
        End If
        Return builder.ToString()
    End Function 'CountyRecordsUpdate

    ' Return BAP and summary details about a tetrad.  This is done by
    ' getting all the modules in the portal and building a species list.
    <WebMethod(CacheDuration:=43200)> _
    Function BapUpdate(ByVal gridX As Integer, ByVal gridY As Integer) _
    As String
        Dim portalAliasInfo As PortalAliasInfo = PortalSettings.GetPortalAliasInfo(Me.HostName)
        Dim portalId As Integer = portalAliasInfo.PortalID
        Dim objDotMap As New DotMapController()
        Dim modules As ArrayList = objDotMap.ModuleList(portalId)
        Dim builder As New StringBuilder()
        Dim list As ArrayList = objDotMap.SpeciesLists(portalId)
        builder.Append("<div class='SubHead'>Special Lists</div>")
        Dim infoList As InfoList
        For Each infoList In list
            Dim speciesInList As ArrayList = objDotMap.SpeciesInListForTetrad(portalId, infoList.SpeciesListId, gridX, gridY)
            builder.Append(("<div class='root'><a href='' onclick='toggleNode(this.parentNode); return false;'>" & infoList.ListName & " (" & speciesInList.Count & ")</a>"))
            Dim specialSpecies As InfoSighting
            For Each specialSpecies In speciesInList
                builder.Append(("<div>" & specialSpecies.EnglishName.Replace("'", "&#39;") & " <em>(" & specialSpecies.LatinName & ")</em> " & specialSpecies.YearSeen & "</div>"))
            Next specialSpecies
            builder.Append("</div>")
        Next infoList
        Return builder.ToString()
    End Function 'BapUpdate

    <WebMethod(CacheDuration:=43200)> _
    Public Function NbnUpdate(ByVal gridX As Integer, ByVal gridY As Integer) _
    As String
        Dim builder As New StringBuilder()
        Dim speciesListForTetrad As New SpeciesListForTetrad(gridX, gridY)
        Dim speciesList As List(Of Species) = speciesListForTetrad.SpeciesList
        builder.Append("<div class='SubHead'>National Biodiversity Network Data ")
        builder.Append(("<a href='" & speciesListForTetrad.TermsAndConditionsUrl & "' target='new' title='Terms and Conditions'>T&Cs</a>"))
        builder.Append("</div>")
        Dim currentTaxonReportingCategory As String = speciesList(0).TaxonReportingCategory.Value
        Dim taxaCount As Integer = CountTaxa(speciesList, currentTaxonReportingCategory)
        builder.Append(("<div class='root'><a href='' onclick='toggleNode(this.parentNode); return false;'>" & currentTaxonReportingCategory & " (" & taxaCount & ")</a>"))
        Dim species As Species
        For Each species In speciesList
            Dim speciesDiv As String = "<div>" & species.CommonName & " <em>(" & species.ScientificName & ")</em></div>"
            If species.TaxonReportingCategory.Value <> currentTaxonReportingCategory Then
                'close the previous DIV and open the next DIV
                builder.Append("</div>")
                builder.Append(("<div class='root'><a href='' onclick='toggleNode(this.parentNode); return false;'>" & species.TaxonReportingCategory.Value & " (" & CountTaxa(speciesList, species.TaxonReportingCategory.Value) & ")</a>"))
                currentTaxonReportingCategory = species.TaxonReportingCategory.Value
                builder.Append(speciesDiv)
            Else
                builder.Append(speciesDiv)
            End If
        Next species
        builder.Append("</div>")
        builder.Append("</div>")
        Return builder.ToString()
    End Function 'NbnUpdate

    Private Function CountTaxa(ByVal speciesList As List(Of Species), ByVal taxon As String) As Integer
        Me._taxon = taxon 'Must set before using predicate
        Dim count As Integer = speciesList.FindLastIndex(AddressOf MatchesTaxon) - speciesList.FindIndex(AddressOf MatchesTaxon) + 1
        Return count
    End Function 'CountTaxa

    Private _taxon As String = String.Empty

    Private Function MatchesTaxon(ByVal species As Species) As Boolean
        If species.TaxonReportingCategory.Value = Me._taxon Then
            Return True
        Else
            Return False
        End If
    End Function 'MatchesTaxon

    Private ReadOnly Property HostName() As String
        Get
            Dim stringBuilder As New StringBuilder()
            stringBuilder.Append(HttpContext.Current.Request.ServerVariables("SERVER_NAME"))
            Dim applicationName As [String] = HttpContext.Current.Request.ApplicationPath.ToString()
            If applicationName = "/" Then
                stringBuilder.Append(String.Empty)
            Else
                stringBuilder.Append(applicationName)
            End If
            Return stringBuilder.ToString()
        End Get
    End Property
End Class

export type LinesList = {
  'bus': Array<Line>,
  'metro': Array<Line>,
  'tram': Array<Line>
}

export type TransportMode = keyof LinesList;

export type Line = {
  'name': string,
  'id': string,
  'Carrier': string,
  'Operator': string,
  'PublicCode': string,
  'TypeOfLine': string,
  'VehicleType': string,
  'night': string,
  'lepiloteId': string,
  'color': string,
  'sqliType': string,
  'sqliSort': string,
  'school': string,
  'PdfNamePlan': string,
  'PdfNameHoraire': string,

  'routes': Array<Route>
}

export type Route = {
  'id': string,
  'refNEtex': string,
  'sqlistationId': string,
  'sqlilineNumber': string,
  'pointId': string,
  'lineId': string,
  'sqliOrdering': string,
  'DirectionRef': string,
  'Direction': string,
  'operator': string,
  'lineRef': string,
  'DirectionStations': string,
  'DirectionStationsSqli': string,

  'stops': Array<Stop>
}

export type Stop = {
  'id': string,
  'refNEtex': string,
  'sqlistationId': string,
  'sqlilineNumber': string,
  'pointId': string,
  'lineId': string,
  'operator': string,
  'lineRef': string,
  'Name': string,
  'Description': string,
  'StopRef': string,
  'type': string,
  'postCode': string,
  'Longitude': string,
  'Latitude': string,
  'sqliLepiloteId': string,webbus
  'pmr': string,
  'code3l': string,
  'PdfNameHoraire': string
}

export type XmlParsedRealTimeHours = {
  "elements": [
     {
        "type": "element",
        "name": "ns1:getStationDetailsResponse",
        "attributes": {
           "xmlns:ns1": "http://ws/webbus/org/"
        },
        "elements": [
           {
              "type": "element",
              "name": "ns1:comLieu",
              "elements": [
                 {
                    "type": "text",
                    "text": "Flammarion Siphon"
                 }
              ]
           },
           {
              "type": "element",
              "name": "ns1:passage",
              "elements": [
                 {
                    "type": "element",
                    "name": "ns1:nomLigneCial",
                    "elements": [
                       {
                          "type": "text",
                          "text": "81"
                       }
                    ]
                 },
                 {
                    "type": "element",
                    "name": "ns1:heurePassageReel",
                    "elements": [
                       {
                          "type": "text",
                          "text": "14:25"
                       }
                    ]
                 },
                 {
                    "type": "element",
                    "name": "ns1:passageReel",
                    "elements": [
                       {
                          "type": "text",
                          "text": "true"
                       }
                    ]
                 },
                 {
                    "type": "element",
                    "name": "ns1:destination",
                    "elements": [
                       {
                          "type": "text",
                          "text": "Le Pharo"
                       }
                    ]
                 }
              ]
           },
           {
              "type": "element",
              "name": "ns1:passage",
              "elements": [
                 {
                    "type": "element",
                    "name": "ns1:nomLigneCial",
                    "elements": [
                       {
                          "type": "text",
                          "text": "81"
                       }
                    ]
                 },
                 {
                    "type": "element",
                    "name": "ns1:heurePassageReel",
                    "elements": [
                       {
                          "type": "text",
                          "text": "14:39"
                       }
                    ]
                 },
                 {
                    "type": "element",
                    "name": "ns1:passageReel",
                    "elements": [
                       {
                          "type": "text",
                          "text": "true"
                       }
                    ]
                 },
                 {
                    "type": "element",
                    "name": "ns1:destination",
                    "elements": [
                       {
                          "type": "text",
                          "text": "Le Pharo"
                       }
                    ]
                 }
              ]
           }
        ]
     }
  ]
}
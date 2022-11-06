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
  'DirectionStationsSqli': string
}
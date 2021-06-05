import { DataQuery, DataSourceJsonData, SelectableValue } from '@grafana/data';

export interface YamcsOptions extends DataSourceJsonData {
  instance?: string;
}

export enum QueryType {
  ListEvents = 'ListEvents',
  ParameterValue = 'ParameterValue',
  ParameterValueHistory = 'ParameterValueHistory',
  ParameterSamples = 'ParameterSamples',
  ParameterRanges = 'ParameterRanges',
}

export enum StatType {
  AVG = 'AVG',
  COUNT = 'COUNT',
  MAX = 'MAX',
  MIN = 'MIN',
}

export interface YamcsQuery extends DataQuery {
  queryType: QueryType;
  parameter?: string;
  maxPages?: number;
}

export interface ParameterSamplesQuery extends YamcsQuery {
  queryType: QueryType.ParameterSamples;
  stats: StatType[];
}

export interface ParameterRangesQuery extends YamcsQuery {
  queryType: QueryType.ParameterRanges;
}

export interface ParameterValueQuery extends YamcsQuery {
  queryType: QueryType.ParameterValue;
}

export interface ParameterValueHistoryQuery extends YamcsQuery {
  queryType: QueryType.ParameterValueHistory;
}

export interface ListEventsQuery extends YamcsQuery {
  queryType: QueryType.ListEvents;
  source?: string;
}

export interface SystemInfo extends SelectableValue<string> {
  parameters: ParameterInfo[];
}

export interface ParameterInfo extends SelectableValue<string> {
  engType: EngType;
  units?: string;
}

export type EngType = 'AGGREGATE'
  | 'ARRAY'
  | 'BINARY'
  | 'BOOLEAN'
  | 'ENUMERATION'
  | 'FLOAT'
  | 'INTEGER'
  | 'NO TYPE'
  | 'STRING'
  | 'TIME'
  ;

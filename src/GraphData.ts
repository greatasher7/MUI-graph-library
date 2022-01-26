export const sampleDataGraph: ISampleDataGraph[] = [
  { date: "2021-04-15T07:00:00.000Z", value: 10 },
  { date: "2021-04-16T07:00:00.000Z", value: 30 },
  { date: "2021-04-17T07:00:00.000Z", value: 15 },
  { date: "2021-04-18T07:00:00.000Z", value: 20 },
  { date: "2021-04-19T07:00:00.000Z", value: 40 },
  { date: "2021-04-20T07:00:00.000Z", value: 50 },
  { date: "2021-04-21T07:00:00.000Z", value: 45 },
  { date: "2021-04-22T07:00:00.000Z", value: 40 },
  { date: "2021-04-23T07:00:00.000Z", value: 50 },
  { date: "2021-04-24T07:00:00.000Z", value: 60 },
  { date: "2021-04-25T07:00:00.000Z", value: 50 },
  { date: "2021-04-26T07:00:00.000Z", value: 60 },
  { date: "2021-04-27T07:00:00.000Z", value: 70 },
];

export interface ISampleDataGraph {
  date: string;
  value: number;
}

declare interface ISpFxStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'spFxStrings' {
  const strings: ISpFxStrings;
  export = strings;
}

export interface IItemsDB {
  id: number;
  name:string;
  details:string;
}

export interface IDataDb{
  itemsDB: IItemsDB[];
};

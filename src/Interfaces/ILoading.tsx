export type ILoadingStateEnum =
  | "loading"
  | "error"
  | "no-data"
  | "success"
  | "init";

interface ILoading {
  state: ILoadingStateEnum;
  statusTxt: string;
}

export default ILoading;

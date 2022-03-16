export type IRequest = "GET" | "POST" | "PATCH" | "PUT" | "DELETE" | "OPTIONS";
interface IRequestObject {
  method: IRequest;
  url: string;
  data?: object;
}
export default IRequestObject;

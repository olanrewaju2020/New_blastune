import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public SUCCESS = "Success";
  public FAILED = "Failed";
  public MSG_INFO = "info";
  public MSG_SUCCESS = "success";
  public MSG_WARNING = "warning";
  public MSG_ERROR = "error";
  public SUCCESS_TITLE = "Operation Successful";
  public ERROR_TITLE = "Error occur";
  public INLINE_DISPLAY = "inline";
  public ATTACHMENT_DISPLAY = "attachment";
  public ERROR_MESSAGE = "Oop! could not process request at the moment";
  public PAGE: number = 0;
  public SIZE: number = 50;
  public FILE_SIZE = 20000000;
  public POSTED_BY = "qYzpgQWMxaAqdMRPYpDyqw==";
  // public CATEGORY;
  public DATEFORMAT = "yyyy/MM/dd";
  public DATEFORMATAPI = "yyyy-MM-dd";
  public DATEFORMATAPIV = "yyyy/MM/dd HH:mm:ss";
  constructor() { }

  
}

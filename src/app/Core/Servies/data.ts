import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class Data {

  private baseUrl: string = environment.baseApi;
  constructor(private http: HttpClient) {}

  // ============================================== GET Request ============================================== //
  /**
   * @param endpoint
   * @param params
   */
  get<T>(endpoint: string, params?: { [key: string]: any }): Observable<T> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== undefined) {
          httpParams = httpParams.append(key, params[key].toString());
        }
      });
    }
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`, {
      params: httpParams,
    });
  }
  // ============================================== GET Request ============================================== //







  // ============================================== POST Request ============================================== //
  /**
   * @param endpoint
   * @param body
   */
  post<T>(endpoint: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, body);
  }
  // ============================================== POST Request ============================================== //

  

  // ============================================== Delete Request ============================================== //
  /**
   * Delete Request
   * @param endpoint
   * @param params
   */
  delete<T>(endpoint: string, params?: { [key: string]: any }): Observable<T> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        const value = params[key];

        if (value !== null && value !== undefined) {
          if (Array.isArray(value)) {
            value.forEach((item) => {
              httpParams = httpParams.append(key, item.toString());
            });
          } else {
            httpParams = httpParams.append(key, value.toString());
          }
        }
      });
    }
    return this.http.delete<T>(`${this.baseUrl}/${endpoint}`, {
      params: httpParams,
    });
  }
  // ============================================== Delete Request ============================================== //





  // ============================================== Put Request ============================================== //
  /**
   * @param endpoint
   * @param body
   */
  put<T>(endpoint: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${endpoint}`, body);
  }
  // ============================================== Put Request ============================================== //








  // ============================================== Patch Request ============================================== //
  /**
   * @param endpoint
   * @param body
   */
  patch<T>(endpoint: string, body: any): Observable<T> {
    return this.http.patch<T>(`${this.baseUrl}/${endpoint}`, body);
  }
  // ============================================== Patch Request ============================================== //
}

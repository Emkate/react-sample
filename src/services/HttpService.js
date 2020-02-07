import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

export class HttpService {
  post(url, body = {}) {
    return this.request('POST', url, body);
  }

  get(url) {
    return this.request('GET', url, {}).pipe(
      map(res => res.response)
    );
  }

  request(type, url, body) {
    return ajax({
      url,
      method: type,
      body,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }
}
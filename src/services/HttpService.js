import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

export class HttpService {
  key = '5e3d530c4c212c51488ad230';

  post(url, body = {}) {
    return this.request('POST', url, body);
  }

  get(url) {
    return this.request('GET', url, {}).pipe(
      map(res => res.response)
    );
  }

  put(url, body = {}) {
    return this.request('PUT', url, body).pipe(
      map(res => res.response)
    )
  }

  delete(url) {
    return this.request('DELETE', url);
  }

  request(type, url, body) {
    return ajax({
      url,
      method: type,
      body,
      headers: {
        'Content-Type': 'application/json',
        'x-apikey': this.key
      }
    });
  }
}
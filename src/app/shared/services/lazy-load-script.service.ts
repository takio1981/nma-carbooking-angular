import { Injectable, Inject } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class LazyLoadScriptService {
  _loadedLibraries: { [url: string]: ReplaySubject<void> } = {};

  constructor(@Inject(DOCUMENT) private readonly document: Document) { }

  loadScript(url: string): Observable<void> {
      this._loadedLibraries[url] = new ReplaySubject();
      const dynamicScripts = [url];
      for (let i = 0; i < dynamicScripts.length; i++) {
        const node = document.createElement('script');
        node.src = dynamicScripts[i];
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
      }
      return this._loadedLibraries[url].asObservable();
  }

  loadStyle(url: string): Observable<any> {
    if (this._loadedLibraries[url]) {
      return this._loadedLibraries[url].asObservable();
    }

    this._loadedLibraries[url] = new ReplaySubject();

    const style = this.document.createElement('link');
    style.type = 'text/css';
    style.href = url;
    style.rel = 'stylesheet';
    style.onload = () => {
      this._loadedLibraries[url].next();
      this._loadedLibraries[url].complete();
    };

    const head = document.getElementsByTagName('head')[0];
    head.appendChild(style);

    return this._loadedLibraries[url].asObservable();
  }

}

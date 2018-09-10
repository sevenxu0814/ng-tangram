import * as NProgress from 'nprogress';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { isPlatformBrowser } from '@angular/common';
import {
  Component, Inject, Injectable, OnDestroy, OnInit, PLATFORM_ID, Renderer2
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  ActivatedRoute, NavigationEnd, NavigationStart, Router, RoutesRecognized
} from '@angular/router';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private route: ActivatedRoute,
    private title: Title) {
  }

  ngOnInit() {

    // 仅在浏览器环境订阅锚点更新
    if (isPlatformBrowser(this.platformId)) {
      this.subscriptions.push(this.route.fragment.subscribe(fragment => {
        const element = document.getElementById(fragment);
        element && element.scrollIntoView();
      }));
    }

    // 订阅路由跳转启动
    this.subscriptions.push(this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe(() => isPlatformBrowser(this.platformId) && NProgress.start()));

    // 订阅路由跳转结束
    this.subscriptions.push(this.router.events
      .pipe(filter(event => event instanceof RoutesRecognized))
      .subscribe(() => isPlatformBrowser(this.platformId) && NProgress.done()));

    // 订阅路由跳转结束
    this.subscriptions.push(this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.route),
        map(route => {
          while (route.firstChild) { route = route.firstChild; }
          return route;
        })
      )
      .subscribe(route => this.title.setTitle(`${route.snapshot.data.title} - NG-TANGRAM`))
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}

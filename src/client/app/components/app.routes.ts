// app
import { HomeRoutes } from './home/home.routes';
import { AboutRoutes } from './about/about.routes';

export const routes: Array<any> = [
import {GvHomeRoutes}                   from './pages/gv-home/gv-home.routes';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,

  ...GvHomeRoutes,
];

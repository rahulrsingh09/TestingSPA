import { Test1Component } from './test1/test1.component';
import { TestComponent } from './test/test.component';
import { AppComponent } from './app.component';


export const Routes = [
  { path: '', redirectTo:'home',pathMatch:'full' },
  { path: 'home', component: AppComponent },
  {path:'test',component:TestComponent},
  {path:'test1',component:Test1Component}
];
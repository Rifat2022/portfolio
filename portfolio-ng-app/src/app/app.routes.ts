import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AboutComponent } from './home/about/about.component';
import { AchievementComponent } from './home/achievement/achievement.component';
import { BlogComponent } from './home/blog/blog.component';
import { ContactComponent } from './home/contact/contact.component';
import { MyServiceComponent } from './home/my-service/my-service.component';
import { WorkComponent } from './home/work/work.component';

export const routes: Routes = [
    { 
        path: 'home',
        title: 'Home Component', 
        component:HomeComponent, 
        children: [
            { path: "about", title:"About", component:AboutComponent }, 
            { path: "achievement", title:"Achievement", component:AchievementComponent }, 
            { path: "blog", title:"Blog", component:BlogComponent }, 
            { path: "contact", title:"Contact", component:ContactComponent },
            { path: "services", title:"My Services", component:MyServiceComponent }, 
            { path: "work", title:"Work", component:WorkComponent },
        ]
    },
    { path: '', redirectTo:'/home', pathMatch: 'full' },
    { path: '**', component:NotFoundPageComponent }
];

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AboutComponent } from './home/about/about.component';
import { AchievementComponent } from './home/achievement/achievement.component';
import { BlogComponent } from './home/blog/blog.component';
import { ContactComponent } from './home/contact/contact.component';
import { MyServiceComponent } from './home/my-service/my-service.component';
import { WorkComponent } from './home/work/work.component';
import { HeroComponent } from './home/hero/hero.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        title: 'Home',
        children: [
            { path: '', redirectTo: 'hero', pathMatch: 'full' },
            { path: 'hero', title: "Hero", component: HeroComponent },
            { path: 'about', title: "About", component: AboutComponent },
            { path: 'achievement', title: "Achievement", component: AchievementComponent },
            { path: 'blog', title: "Blog", component: BlogComponent },
            { path: 'contact', title: "Contact", component: ContactComponent },
            { path: 'services', title: "Services", component: MyServiceComponent },
            { path: 'work', title: "Work", component: WorkComponent },
        ]
    },
    {
        path: '**',
        component: NotFoundPageComponent
    }

];

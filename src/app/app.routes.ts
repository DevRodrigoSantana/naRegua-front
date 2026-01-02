import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { LayoutPublico } from './layouts/publicos/layout-publico/layout-publico';


export const routes: Routes = [

    {
        path:'',
        component: LayoutPublico,
        children:[
            {path:"", component: Home}
        ]

    }
];

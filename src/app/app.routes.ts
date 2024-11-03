import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'portifolio', loadChildren:()=>import('./portifolio/portifolio.module').then(m=>m.PortifolioModule

    )}
    
];

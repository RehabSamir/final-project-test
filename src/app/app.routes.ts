import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsParentComponent } from './components/products-parent/products-parent.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { GroupRoutesComponent } from './components/group-routes/group-routes.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ObsOberatorsComponent } from './components/obs-oberators/obs-oberators.component';
import { UserTemplateFormComponent } from './components/User/user-template-form/user-template-form.component';
 import { AdminComponent } from './components/admin/admin.component';

export const routes: Routes = [
    // {path:'',component:GroupRoutesComponent,children:[
        {path:'',redirectTo:'Home',pathMatch:'full'},
        {path:'Home' , component:ProductListComponent , title:'Home page'},
        {path:'products' , component:ProductListComponent , title:'products page'},
        {path:'productsParent' , component:ProductsParentComponent , title:'productsParent page'},
        {path:'Prd/:productID',component:ProductDetailsComponent,title:"Products Details Page"},
        {path:'obs' , component:ObsOberatorsComponent , title:'observe page'},
        {path:'UserTemplate',component:UserTemplateFormComponent,title:"User SignUp"},
        {path:'admin',component:AdminComponent,title:"admin"},
        {path:'**',component:NotFoundPageComponent,title:"Not found Page"},
    // ]}
];

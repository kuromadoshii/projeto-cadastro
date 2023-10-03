import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
=======

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
>>>>>>> 9e27f6f0ee869a6663d65b53dfa4c7c470f9796f

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    FirstComponentComponent,
    CadastroComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventosComponent,
    EmitterComponent,
    ChangeNumberComponent,
    ListRenderComponent,
    PipesComponent,
    TwoWayBindingComponent,
    ItemDetailComponent
=======
    NewComponentComponent,
    CadastroComponent,
    ParentDataComponent
>>>>>>> 9e27f6f0ee869a6663d65b53dfa4c7c470f9796f
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule,
    HttpClientModule
=======
    FormsModule
>>>>>>> 9e27f6f0ee869a6663d65b53dfa4c7c470f9796f
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

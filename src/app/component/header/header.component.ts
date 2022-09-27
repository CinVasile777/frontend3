import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];
  constructor() { }

    ngOnInit() {
      this.items = [
        {
            
            label:'Home',
            icon:'pi pi-home',
            routerLink: '/home',
            
        },
      
        {
            label:'Brand',
            
            items:[
                {
                    label:'Men',
                    items:[
                    {
                        label:'ROLEX',
                        routerLink: '/categoryForMan/brand=ROLEX/gender=MASCULIN'
                    },    
                    {
                        label:'SLAZENGER',
                        routerLink:'/categorySlazengerForMan/brand=SLAZENGER/gender=MASCULIN'
                    },
                    {
                        label:'FOSSIL',
                        routerLink: '/categoryFossilForMan/brand=FOSSIL/gender=MASCULIN',
                    },

                    ]
                },
                {
                    label:'Women',
                    items:[
                    {
                        label:'ROLEX',
                        routerLink: '/categoryForWoman/brand=ROLEX/gender=FEMININ',
                    },    
                    {
                        label:'SLAZENGER',
                        routerLink:'/categorySlazengerForWoman/brand=SLAZENGER/gender=FEMININ'
                    },
                    
                    ]
                },
                
            ]
        },

        {
            label:'Admin',
            routerLink: '/admin'
        },
        
    ];
    }    
 
}

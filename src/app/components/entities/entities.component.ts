import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModelMetadataService, EntityService } from '@app/services';
import { IEntityModel } from '@app/models';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.scss']
})
export class EntitiesComponent implements OnInit {

  entities: any;
  displayedColumns: string[] = ['firstName', 'lastName', 'phoneNo', 'email', 'houseNo'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router, private metaService: ModelMetadataService,
    private service: EntityService) { }

  ngOnInit() {
    this.service.getPage().subscribe((response: any) => {
      console.log(response);
      this.entities = response.items;
    });
  }

}


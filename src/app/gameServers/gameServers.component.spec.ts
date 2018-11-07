import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameServersComponent } from './gameServers.component';

describe('GameServersComponent', () => {
  let component: GameServersComponent;
  let fixture: ComponentFixture<GameServersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameServersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

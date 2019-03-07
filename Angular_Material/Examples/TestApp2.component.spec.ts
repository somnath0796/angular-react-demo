import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestApp2Component } from './TestApp2.component';
import { DataService } from './data.service';



let component: TestApp2Component;
let fixture: ComponentFixture<TestApp2Component>;
let dataService: DataService;

let dataServiceStub: {
    userName: string;
    userEmail: string;
}

describe('TestApp2Component', () => {
beforeEach(() => {
    //stub
    dataServiceStub = {
        userName : 'Test User',
        userEmail :  'test@mycompany.com'
    };

    TestBed.configureTestingModule({
        declarations: [TestApp2Component],
        providers: [ { provide: DataService, useValue: dataServiceStub } ]
    });

    fixture = TestBed.createComponent(TestApp2Component);
    component = fixture.componentInstance;

    dataService = TestBed.get(DataService);
    })

    it("Get username ", () => {
        expect(dataService.userName).toBe('Test User');
    });

    it("Get useremail", () => {
        expect(dataService.userEmail).toBe('test@mycompany.com');
    })



})



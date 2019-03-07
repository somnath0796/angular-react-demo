import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestApp1Component } from './TestApp1.component';

let component: TestApp1Component;
let fixture: ComponentFixture<TestApp1Component>;

describe('TestApp1Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ TestApp1Component ],
        });
        fixture = TestBed.createComponent(TestApp1Component);

        component = fixture.componentInstance;
    })

    it('Should have name property', () =>{
        expect(component.name).toBe('Lakshman');
    })
})
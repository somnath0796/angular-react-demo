import {TestApp} from './TestApp';
describe('TestApp', () => {
  beforeEach(function() {
    this.app = new TestApp();
  });

  it('should have name property', function() {
    expect(this.app.name).toBe('Lakshman');
  });

  it('should say hello with name property', function() {
    expect(this.app.sayHello()).toBe('Hello Lakshman');
  });
});

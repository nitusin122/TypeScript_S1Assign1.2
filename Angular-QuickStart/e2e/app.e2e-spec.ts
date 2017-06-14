import { AngularQuickStartPage } from './app.po';

describe('angular-quick-start App', () => {
  let page: AngularQuickStartPage;

  beforeEach(() => {
    page = new AngularQuickStartPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

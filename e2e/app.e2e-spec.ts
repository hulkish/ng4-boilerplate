import { Ng4BoilerplatePage } from './app.po';

describe('ng4-boilerplate App', () => {
  let page: Ng4BoilerplatePage;

  beforeEach(() => {
    page = new Ng4BoilerplatePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

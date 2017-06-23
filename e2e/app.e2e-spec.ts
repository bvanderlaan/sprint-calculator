import { SprintCalcPage } from './app.po';

describe('sprint-calc App', () => {
  let page: SprintCalcPage;

  beforeEach(() => {
    page = new SprintCalcPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

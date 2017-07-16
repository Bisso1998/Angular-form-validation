import { PipesAngularPage } from './app.po';

describe('pipes-angular App', () => {
  let page: PipesAngularPage;

  beforeEach(() => {
    page = new PipesAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

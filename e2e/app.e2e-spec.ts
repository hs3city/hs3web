import { Hs3webPage } from './app.po';

describe('hs3web App', function() {
  let page: Hs3webPage;

  beforeEach(() => {
    page = new Hs3webPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

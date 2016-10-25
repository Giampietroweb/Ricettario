import { RicettarioPage } from './app.po';

describe('ricettario App', function() {
  let page: RicettarioPage;

  beforeEach(() => {
    page = new RicettarioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { RISPage } from './app.po';

describe('ris App', () => {
  let page: RISPage;

  beforeEach(() => {
    page = new RISPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

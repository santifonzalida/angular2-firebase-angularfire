import { FireabaseAngularfirePage } from './app.po';

describe('fireabase-angularfire App', () => {
  let page: FireabaseAngularfirePage;

  beforeEach(() => {
    page = new FireabaseAngularfirePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

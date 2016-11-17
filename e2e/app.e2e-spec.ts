import { HeroAppExercisePage } from './app.po';

describe('hero-app-exercise App', function() {
  let page: HeroAppExercisePage;

  beforeEach(() => {
    page = new HeroAppExercisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

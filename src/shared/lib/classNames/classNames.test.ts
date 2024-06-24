import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('with first parameter', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    const expected = 'someClass additional';
    expect(classNames('someClass', {}, ['additional'])).toBe(expected);
  });

  test('with mods class', () => {
    const expected = 'someClass hovered scrollable additional';
    expect(classNames('someClass', { hovered: true, scrollable: true }, ['additional'])).toBe(expected);
  });

  test('with mods false', () => {
    const expected = 'someClass hovered additional';
    expect(classNames('someClass', { hovered: true, scrollable: false }, ['additional'])).toBe(expected);
  });

  test('with mods undefined', () => {
    const expected = 'someClass hovered additional';
    expect(classNames('someClass', { hovered: true, scrollable: undefined }, ['additional'])).toBe(expected);
  });
});

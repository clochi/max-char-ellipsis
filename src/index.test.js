const { maxCharEllipsis } = require('./index');

test('should cut the string at 20 characters and put ellipsis', () => (
    expect(maxCharEllipsis('This is my long text that I have to cut', 20)).toBe('This is my long text...')
))
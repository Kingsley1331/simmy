function sum(a, b) {
    return a + b;
}

test('adds 13 + 26 to equal 39', () => {
    expect(sum(13, 26)).toBe(39);
})
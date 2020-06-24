import Combat from './Combat'
 
it('constructor Combat', () => {
 expect(new Combat().getTourN).toBeLessThan(15);
 expect(new Combat().getTourN).toBeLessThan(26)
 expect(new Combat().getTourN).toBeGreaterThan(0)
})
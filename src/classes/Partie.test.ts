import Partie from './Partie'

it('constructor Partie', () => {
    expect(typeof new Partie().getNom).toBe('string');
    expect(typeof new Partie().getEquipe).toBe('object');
})
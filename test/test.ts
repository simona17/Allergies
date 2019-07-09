import Allergies from  '../allergies'

describe('allergicTo', () => {
    it('no allergies means not allergic', () => {
     const alrg= new Allergies(34)
      expect(alrg.allergicTo('chocolate')).toBeTruthy()
    })
    it('is allergic to eggs', () => {
      const allergies = new Allergies(1)
  
      expect(allergies.allergicTo('eggs')).toBeTruthy()
    })
    it('allergic to eggs in addition to other stuff', () => {
      const allergies = new Allergies(5)
  
      expect(allergies.allergicTo('eggs')).toBeTruthy()
      expect(allergies.allergicTo('shellfish')).toBeTruthy()
      expect(allergies.allergicTo('strawberries')).toBeFalsy()
    })
  })
  

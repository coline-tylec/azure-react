describe('test_name', function () {

    it('what_it_does', function () {

        cy.viewport(1504, 860)

        cy.visit('http://localhost:3000/')

        cy.get('#app > div > .MuiFormControl-root-1 > .MuiInputBase-root-36 > .MuiInputBase-input-46').click()

        cy.get('#app > div > .MuiFormControl-root-1 > .MuiInputBase-root-36 > .MuiInputBase-input-46').type('Fight For Life')

        cy.get('form > div > .MuiFormControl-root-1 > .MuiInputBase-root-36 > .MuiInputBase-input-46').click()

        cy.get('form > div > .MuiFormControl-root-1 > .MuiInputBase-root-36 > .MuiInputBase-input-46').type('Taylor')

        cy.get('div > div > form > .MuiButtonBase-root-76 > .MuiButton-label-125').click()

        cy.get('.MuiFormGroup-root-53 > .MuiFormControlLabel-root-55:nth-child(2) > .MuiButtonBase-root-76 > .MuiIconButton-label-75 > .MuiPrivateSwitchBase-input-69').click()

        cy.get('.MuiFormGroup-root-53 > .MuiFormControlLabel-root-55:nth-child(2) > .MuiPrivateSwitchBase-checked-67 > .MuiIconButton-label-75 > .MuiPrivateSwitchBase-input-69').type('Guerrier')

        cy.get('form > div > .MuiFormControl-root-1 > .MuiInputBase-root-36 > .MuiInputBase-input-46').click()

        cy.get('form > div > .MuiFormControl-root-1 > .MuiInputBase-root-36 > .MuiInputBase-input-46').type('Alexandre')

        cy.get('div > div > form > .MuiButtonBase-root-76 > .MuiButton-label-125').click()

        cy.get('.MuiFormGroup-root-53 > .MuiFormControlLabel-root-55:nth-child(3) > .MuiButtonBase-root-76 > .MuiIconButton-label-75 > .MuiPrivateSwitchBase-input-69').click()

        cy.get('.MuiFormGroup-root-53 > .MuiFormControlLabel-root-55:nth-child(3) > .MuiButtonBase-root-76 > .MuiIconButton-label-75 > .MuiPrivateSwitchBase-input-69').type('Soigneur')

        cy.get('form > div > .MuiFormControl-root-1 > .MuiInputBase-root-36 > .MuiInputBase-input-46').click()

        cy.get('form > div > .MuiFormControl-root-1 > .MuiInputBase-root-36 > .MuiInputBase-input-46').type('Gandalf')

        cy.get('form > .MuiFormControl-root-1 > .MuiFormGroup-root-53 > .MuiFormControlLabel-root-55:nth-child(2) > .MuiTypography-root-88').click()

        cy.get('.MuiFormGroup-root-53 > .MuiFormControlLabel-root-55:nth-child(2) > .MuiPrivateSwitchBase-checked-67 > .MuiIconButton-label-75 > .MuiPrivateSwitchBase-input-69').type('Masse')

        cy.get('div > div > form > .MuiButtonBase-root-76 > .MuiButton-label-125').click()

        cy.get('.MuiFormGroup-root-53 > .MuiFormControlLabel-root-55:nth-child(4) > .MuiButtonBase-root-76 > .MuiIconButton-label-75 > .MuiPrivateSwitchBase-input-69').click()

        cy.get('.MuiFormGroup-root-53 > .MuiFormControlLabel-root-55:nth-child(4) > .MuiButtonBase-root-76 > .MuiIconButton-label-75 > .MuiPrivateSwitchBase-input-69').type('Assassin')

        cy.get('form > div > .MuiFormControl-root-1 > .MuiInputBase-root-36 > .MuiInputBase-input-46').click()

        cy.get('form > div > .MuiFormControl-root-1 > .MuiInputBase-root-36 > .MuiInputBase-input-46').type('Creed')

        cy.get('div > div > form > .MuiButtonBase-root-76 > .MuiButton-label-125').click()

        cy.get('#root > #app > div > .MuiButtonBase-root-76 > .MuiButton-label-125').click()

        cy.get('body > #root > #app > div > .MuiButtonBase-root-234').click()

        cy.get('#root > #app > div > .MuiButtonBase-root-234 > .MuiButton-label-209').click()

        cy.get('body > #root > #app > div > .MuiButtonBase-root-234').click()

        cy.get('#root > #app > div > .MuiButtonBase-root-234 > .MuiButton-label-209').click()

        cy.get('#root > #app > div > .MuiButtonBase-root-234 > .MuiButton-label-209').click()

        cy.get('#root > #app > div > .MuiButtonBase-root-234 > .MuiButton-label-209').click()

        cy.get('body > #root > #app > div').click()

        cy.get('#root > #app > div > .MuiButtonBase-root-234 > .MuiButton-label-209').click()

        cy.get('#root > #app > div > .MuiButtonBase-root-234 > .MuiButton-label-209').click()

    })

})

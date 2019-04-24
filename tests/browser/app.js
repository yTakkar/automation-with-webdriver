const autoLogin = require('../../helpers/autoLogin')

describe('Sangam.com LoginPage', () => {
  it('should login', async () => {
    await autoLogin()
  })

  it('should goto home page',  async () => {
    const homeHeaderIcon = await $('.nav-icon-home')
    const dashboardCard = await $('.cs-dshbrd-crd')

    homeHeaderIcon.click()
    await dashboardCard.waitForExist(4000)
  })

  it('should go to /edit-pp when editPP link is clicked', async () => {
    const ppLink = await $('//*[@href="/edit-partner-preferences"]')
    const ppRow = await $('.cs-pprf-rw')
    const ppBack = await $('.cs-pprf-bck')
    const dashboardCard = await $('.cs-dshbrd-crd')

    await ppLink.click()
    await ppRow.waitForExist(2000)
    await ppBack.click()
    await dashboardCard.waitForExist(2000)
  })

  it('should goto /preview-profile when editBiodata link is clicked', async () => {
    const editLink = await $('//*[@href="/preview-profile"]')
    const editCard = await $('.cs-edt-prfl-crd')

    await editLink.click()
    await editCard.waitForExist(2000)
  })

  it('should goto /privacy-settings when profile img is clicked', async () => {
    const profilePic = await $('.cs-edt-prfl-img')
    const editPrivacy = await $('.cs-ps-p-edt-prvcy')

    await profilePic.click()
    await editPrivacy.waitForExist(2000)
  })
})

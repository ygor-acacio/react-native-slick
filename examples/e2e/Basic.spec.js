describe('Basic', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
    await element(by.id('Basic')).tap()
  })

  it('should have Basic slick', async () => {
    await expect(element(by.id('Hello'))).toBeVisible()
    await expect(element(by.id('Beautiful'))).toBeNotVisible()
    await expect(element(by.id('Simple'))).toBeNotVisible()
  })

  it('should be the same slick after swipe right when loop={false}', async () => {
    await element(by.id('Hello')).swipe('right')
    await expect(element(by.id('Hello'))).toBeVisible()
    await expect(element(by.id('Beautiful'))).toBeNotVisible()
  })

  it('should be Beautiful slick after swipe left', async () => {
    await element(by.id('Hello')).swipe('left')
    await expect(element(by.id('Hello'))).toBeNotVisible()
    await expect(element(by.id('Beautiful'))).toBeVisible()
  })

  it('should be Simple slick after swipe left twice', async () => {
    await element(by.id('Hello')).swipe('left')
    await element(by.id('Beautiful')).swipe('left')
    await expect(element(by.id('Hello'))).toBeNotVisible()
    await expect(element(by.id('Beautiful'))).toBeNotVisible()
    await expect(element(by.id('Simple'))).toBeVisible()
  })
})

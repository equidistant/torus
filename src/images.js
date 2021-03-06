const imgUrl = `${process.env.PUBLIC_URL}/img`

export const LogoImg = {
  torus: {
    small: {
      black : `${imgUrl}/logo/torus-black-small.png`,
      white : `${imgUrl}/logo/torus-white-small.png`
    },
    big: {
      black : `${imgUrl}/logo/torus-black-big.png`,
    }
  },
  zero: {
    black : `${imgUrl}/logo/zero-black-small.png`,
    white : `${imgUrl}/logo/zero-white-small.png`
  }
}

export const MenuImg = {
  primary: `${imgUrl}/misc/menu-primary.svg`,
  secondary: `${imgUrl}/misc/menu-secondary.svg`
}

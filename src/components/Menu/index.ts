
export interface pathData {
  name: string,
  path: string,
  component?: any,
  children?: []
}

export interface menuData {
  name: string,
  path: string,
  menuId: string,
}

export interface menuDataTS {
  menuList: any[],
  activeMenu: any
}

export const menuDataList = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About Us',
    path: '/about-us',
  },
  {
    name: 'Products',
    path: '/products',
    children: [
      {
        name: 'Home Furniture',
        path: '/home-furnitrue',
        children: [
          {
            name: 'Small Chair and end Table',
            path: '/small-chair-and-end-table'
          },
          {
            name: 'Living Room Shelf',
            path: '/livingRoom-shelf'
          },
          {
            name: 'Flower Shelf',
            path: '/flower-shelf'
          },
          {
            name: 'Kitchen Shelf',
            path: '/kitchen-shelf'
          },
        ]
      },
      {
        name: 'Home Decor',
        path: '/home-decor',
        children: [
          {
            name: 'Vase',
            path: '/vase'
          }
        ]
      },
    ]
  },
  {
    name: 'Contact',
    path: '/contact',
  }
]

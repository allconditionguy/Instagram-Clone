import { USERS } from './users'

export const POSTS = [
  {
    imageUrl:
      'https://th.bing.com/th/id/R.758d2fe41c811f460a972703c04f43ea?rik=PWkP4U4zsvt2DA&riu=http%3a%2f%2fs3.amazonaws.com%2fdigitaltrends-uploads-prod%2f2013%2f11%2f5-apps-all-NBA-basketball-fans-need-on-their-phones.jpg&ehk=MEhb%2bp3BfajXXWIlTdICf7QGQgWP3tqYtM3HFVwTH00%3d&risl=&pid=ImgRaw&r=0',
    user: USERS[0].user,
    likes: 7870,
    caption: 'The Nba will be back soon',
    profile_picture: USERS[0].image,
    comments: [
      {
        user: 'lebronjames',
        comment: 'Great news!',
      },
      {
        user: 'bleacherreport',
        comment:'lezzgo',
      },
    ],
  },
  {
    imageUrl:
      'https://th.bing.com/th?id=OIF.h7ZYSk6kq5%2fnfy7YnhMAMA&pid=ImgDet&rs=1',
    user: USERS[1].user,
    likes: 4721,
    caption: 'VAMOS!It was very important to start with a win',
    profile_picture: USERS[1].image,
    comments: [
      {
        user: 'prayingmedic',
        comment: 'that is great!',
      },
    ],
  },
  {
    imageUrl:
      'https://th.bing.com/th/id/OIP.yPnsA6e-ZPgfaF1onSBmrgHaE8?pid=ImgDet&rs=1',
    user: USERS[2].user,
    likes: 6220,
    caption: 'Love this club.',
    profile_picture: USERS[2].image,
    comments: [
      {
        user: 'lfcgelo',
        comment:'one time',
      },
      {
        user: 'koteng',
        comment: 'good times!',
      },
    ],
  },
]

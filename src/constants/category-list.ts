type Props = {
  title: string;
  description: string;
  membersImage: {
    src: string;
    alt: string;
  }[];
  href: string;
};

export const categoryList: Props[] = [
  {
    title: '社会活動✨',
    description:
      '自分の価値を示すことで快楽(幸福度)を増幅させたいという本能である。社会における活動の大多数の当たり前になるというような同調性(大多数)の二つである。',
    membersImage: [
      {
        src: '/images/category/social-activities/1.jpg',
        alt: '1',
      },
      {
        src: '/images/category/social-activities/2.jpg',
        alt: '2',
      },
      {
        src: '/images/category/social-activities/3.jpg',
        alt: '3',
      },
      {
        src: '/images/category/social-activities/4.jpg',
        alt: '4',
      },
    ],
    href: 'social-activities',
  },
  {
    title: '娯楽🛝',
    description:
      '人間は昔から娯楽と共にあることや、科学的にも娯楽は人間に良い影響を与えることからもわかる。娯楽の当たり前は、概ね事実と本能の要素で構成されている。',
    membersImage: [
      {
        src: '/images/category/play/1.jpg',
        alt: '1',
      },
      {
        src: '/images/category/play/2.jpg',
        alt: '2',
      },
      {
        src: '/images/category/play/3.jpg',
        alt: '3',
      },
      {
        src: '/images/category/play/4.jpg',
        alt: '4',
      },
    ],
    href: 'play',
  },
  {
    title: '公共福祉👨‍🏭',
    description:
      '自分の価値を示すことで快楽(幸福度)を増幅させたいという本能である。社会における活動の大多数の当たり前になるというような同調性(大多数)の二つである。',
    membersImage: [
      {
        src: '/images/category/welfare/1.jpg',
        alt: '1',
      },
      {
        src: '/images/category/welfare/2.jpg',
        alt: '2',
      },
      {
        src: '/images/category/welfare/3.jpg',
        alt: '3',
      },
      {
        src: '/images/category/welfare/4.jpg',
        alt: '4',
      },
    ],
    href: 'welfare',
  },
  {
    title: '衣類👕',
    description:
      '衣服には保健衛生機能と社会的機能という役割があ利、この２つが衣服を着用する理由であるため、あてはまる事柄には疑問を持たず、当たり前となる。',
    membersImage: [
      {
        src: '/images/category/clothes/1.jpg',
        alt: '1',
      },
      {
        src: '/images/category/clothes/2.jpg',
        alt: '2',
      },
      {
        src: '/images/category/clothes/3.jpg',
        alt: '3',
      },
      {
        src: '/images/category/clothes/4.jpg',
        alt: '4',
      },
    ],
    href: 'clothes',
  },
  {
    title: '食🍱',
    description:
      '食事とは、栄養摂取のための行為であり、文化的な営みでもある。食の当たり前は、社会の発展に伴って文化習慣の要素が強くなったが、根底には本能と科学的事実がある。',
    membersImage: [
      {
        src: '/images/category/clothes/1.jpg',
        alt: '1',
      },
      {
        src: '/images/category/clothes/2.jpg',
        alt: '2',
      },
      {
        src: '/images/category/clothes/3.jpg',
        alt: '3',
      },
      {
        src: '/images/category/clothes/4.jpg',
        alt: '4',
      },
    ],
    href: 'food',
  },
  {
    title: '住🏠',
    description:
      '人間の生活の基本でありその存在そのものが当たり前である。住の当たり前は信仰以外の要素に満遍なく配置された。時代や環境の変化に伴い当たり前も変化していく。',
    membersImage: [
      {
        src: '/images/category/clothes/1.jpg',
        alt: '1',
      },
      {
        src: '/images/category/clothes/2.jpg',
        alt: '2',
      },
      {
        src: '/images/category/clothes/3.jpg',
        alt: '3',
      },
      {
        src: '/images/category/clothes/4.jpg',
        alt: '4',
      },
    ],
    href: 'house',
  },
];

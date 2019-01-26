routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/side1/',
    url: './pages/side1.html',
  },
  {
    path: '/side2/',
    url: './pages/side2.html',
  },
  {
    path: '/side3/',
    url: './pages/side3.html',
  },
  // Default route (404 page). SKAL VÆRE TIL SIDST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];

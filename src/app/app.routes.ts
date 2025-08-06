import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'about/strength',
    title: 'Our Strengths - Opas Infra',
    loadComponent: () => import('./pages/strength/strength.component').then(m => m.StrengthComponent)
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services.component').then(m => m.ServicesComponent)
  },

  {
    path: 'projects',
    loadComponent: () =>
      import('./pages/projects/projects.component').then(m => m.ProjectsComponent)
  },

  {
    path: 'projects/ongoing',
    loadComponent: () =>
      import('./pages/ongoing.component').then((m) => m.OngoingComponent)
  }
  ,
  {
    path: 'projects/awarded',
    loadComponent: () =>
      import('./components/project-gallery.component').then(m => m.ProjectGalleryComponent),
  },
  {
    path: 'projects/road',
    loadComponent: () =>
      import('./components/project-gallery.component').then(m => m.ProjectGalleryComponent),
  }, {
    path: 'projects/bridge',
    loadComponent: () =>
      import('./components/project-gallery.component').then(m => m.ProjectGalleryComponent),
  },
  {
    path: 'projects/building',
    loadComponent: () =>
      import('./components/project-gallery.component').then(m => m.ProjectGalleryComponent),
  },
  {
    path: 'projects/completed',
    loadComponent: () =>
      import('./pages/completed.component').then((m) => m.CompletedComponent)
  },
  {
    path: "register",
    loadComponent: () =>
      import('./pages/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./pages/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
  },

  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'world-record',
    loadComponent: () => import('./pages/world-record.component').then(m => m.WorldRecordComponent)
  }
  ,
  {
    path: 'news-media',
    loadComponent: () => import('./pages/news-media.component').then(m => m.NewsMediaComponent)
  },
  {
    path: 'career',
    loadComponent: () => import('./pages/career.component').then(m => m.CareerComponent)
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)
  }
];

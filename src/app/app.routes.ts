import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { PricingPageComponent } from './pages/pricing-page/pricing-page';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'لين أكاديمي | منصة التعليم والتدريب الإلكتروني' },
  { path: 'pricing', component: PricingPageComponent, title: 'الباقات والأسعار | لين أكاديمي' },
  { path: '**', redirectTo: '' },
];

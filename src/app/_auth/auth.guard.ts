
import {
  ActivatedRouteSnapshot, CanActivateFn,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';

import { Router } from '@angular/router';
import {Observable} from "rxjs";
import {AuthService} from "../services/Auth/auth.service";
import {inject} from "@angular/core";

export const CustomerAuthGuard :CanActivateFn = (route, state) =>{
  const authService = inject(AuthService);
  const router = inject(Router);

  if(authService.isAuthenticated) return true;

  router.navigate(['/login']);
  return false;
}

export const AdminAuthGuard :CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if(authService.isAuthenticated && await authService.isAdmin) return true;

  router.navigate(['/login']);
  return false;
}


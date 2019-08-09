import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { Menu, Search, Users, BarChart2, Calendar, MessageSquare, FileText, 
  Mail, LogIn, LogOut, UserPlus, UserCheck, ShieldOff, User, File, Box, 
  Archive, LifeBuoy, HelpCircle, Settings, Edit3, X, PieChart, Package,
  Layers, Bell, Trash2 } from 'angular-feather/icons';

const feather_icons = {
  Menu, Search, Users, BarChart2, Calendar, MessageSquare, FileText, 
  Mail, LogIn, LogOut, UserPlus, UserCheck, ShieldOff, User, File, Box, 
  Archive, LifeBuoy, HelpCircle, Settings, Edit3, X, PieChart, Package,
  Layers, Bell, Trash2
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherModule.pick(feather_icons),
  ],
  exports: [FeatherModule]
})
export class IconsModule { }

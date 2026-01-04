
import React from 'react';
import { 
  Sun, 
  FileText, 
  Layers, 
  Zap, 
  Settings, 
  ShieldCheck,
  Building2,
  Home,
  Factory
} from 'lucide-react';
import { Service, Project } from './types';

export const SERVICES: Service[] = [
  {
    id: 'pv-permit-sets',
    title: 'PV Permit Sets',
    description: 'High-quality residential and commercial permit sets tailored to local AHJ requirements.',
    icon: 'FileText',
    details: [
      'Site Layout and Elevations',
      'Single Line Diagrams (SLD)',
      'Placards and Labels',
      'Structural Analysis'
    ]
  },
  {
    id: 'cad-design',
    title: 'CAD Design & Drafting',
    description: 'Precise AutoCAD drafting for all types of solar photovoltaic systems.',
    icon: 'Layers',
    details: [
      '2D and 3D Modeling',
      'System Layout Optimization',
      'Electrical Design',
      'As-Built Drawings'
    ]
  },
  {
    id: 'pe-stamping',
    title: 'PE Structural & Electrical Stamping',
    description: 'Professional engineering certification across most US states.',
    icon: 'ShieldCheck',
    details: [
      'Structural P.E. Stamping',
      'Electrical P.E. Stamping',
      'Roof Integrity Reports',
      'Wet Stamping available'
    ]
  },
  {
    id: 'pvsyst-analysis',
    title: 'PVSyst & Energy Modeling',
    description: 'Advanced energy production modeling for bankable projects.',
    icon: 'Zap',
    details: [
      'Shading Analysis',
      'Production Reports',
      'Performance Ratios',
      'Financial ROI Modeling'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Downtown Commercial Hub',
    category: 'Commercial',
    location: 'California, USA',
    imageUrl: 'https://picsum.photos/seed/solar1/800/600',
    description: 'A 250kW rooftop installation for a major tech headquarters.'
  },
  {
    id: '2',
    title: 'Eco-Friendly Residential Estate',
    category: 'Residential',
    location: 'Arizona, USA',
    imageUrl: 'https://picsum.photos/seed/solar2/800/600',
    description: 'Complete energy independence for a sustainable smart home.'
  },
  {
    id: '3',
    title: 'Industrial Warehouse Array',
    category: 'Industrial',
    location: 'Texas, USA',
    imageUrl: 'https://picsum.photos/seed/solar3/800/600',
    description: 'Large scale ground-mount and rooftop integration for manufacturing.'
  }
];

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Calculator', path: '/calculator' },
  { name: 'Contact', path: '/contact' }
];

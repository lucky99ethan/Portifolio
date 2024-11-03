import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'home': {
    'fontFamily': ''Roboto', sans-serif',
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 1.6 }]
  },
  'hero': {
    'background': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
    'color': '#fff',
    'textAlign': 'center',
    'padding': [{ 'unit': 'px', 'value': 150 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 150 }, { 'unit': 'px', 'value': 20 }]
  },
  'hero-content': {
    'maxWidth': [{ 'unit': 'px', 'value': 800 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'hero h1': {
    'fontSize': [{ 'unit': 'em', 'value': 4 }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'textTransform': 'uppercase',
    'letterSpacing': [{ 'unit': 'px', 'value': 2 }]
  },
  'hero p': {
    'fontSize': [{ 'unit': 'em', 'value': 1.5 }],
    'marginBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  'hero btn': {
    'backgroundColor': '#ff4081',
    'color': '#fff',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 30 }],
    'textDecoration': 'none',
    'borderRadius': '50px',
    'fontSize': [{ 'unit': 'em', 'value': 1.2 }],
    'transition': 'background-color 0.3s ease'
  },
  'hero btn:hover': {
    'backgroundColor': '#e91e63'
  },
  'about': {
    'padding': [{ 'unit': 'px', 'value': 80 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 80 }, { 'unit': 'px', 'value': 20 }],
    'textAlign': 'center'
  },
  'skills': {
    'padding': [{ 'unit': 'px', 'value': 80 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 80 }, { 'unit': 'px', 'value': 20 }],
    'textAlign': 'center'
  },
  'projects': {
    'padding': [{ 'unit': 'px', 'value': 80 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 80 }, { 'unit': 'px', 'value': 20 }],
    'textAlign': 'center'
  },
  'contact': {
    'padding': [{ 'unit': 'px', 'value': 80 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 80 }, { 'unit': 'px', 'value': 20 }],
    'textAlign': 'center'
  },
  'about h2': {
    'fontSize': [{ 'unit': 'em', 'value': 2.5 }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'color': '#ff4081'
  },
  'skills h2': {
    'fontSize': [{ 'unit': 'em', 'value': 2.5 }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'color': '#ff4081'
  },
  'projects h2': {
    'fontSize': [{ 'unit': 'em', 'value': 2.5 }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'color': '#ff4081'
  },
  'contact h2': {
    'fontSize': [{ 'unit': 'em', 'value': 2.5 }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'color': '#ff4081'
  },
  'about p': {
    'fontSize': [{ 'unit': 'em', 'value': 1.2 }],
    'maxWidth': [{ 'unit': 'px', 'value': 800 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'contact p': {
    'fontSize': [{ 'unit': 'em', 'value': 1.2 }],
    'maxWidth': [{ 'unit': 'px', 'value': 800 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'skills-container': {
    'display': 'flex',
    'justifyContent': 'center',
    'flexWrap': 'wrap'
  },
  'skill-category': {
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'animation': 'fadeIn 1s ease-in-out'
  },
  'skill-category h3': {
    'fontSize': [{ 'unit': 'em', 'value': 1.8 }],
    'color': '#333'
  },
  'skill-item': {
    'fontSize': [{ 'unit': 'em', 'value': 1.2 }],
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'position': 'relative',
    'overflow': 'hidden',
    'display': 'flex',
    'alignItems': 'center',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }],
    'background': '#f8f9fa',
    'borderRadius': '5px',
    'transition': 'transform 0.3s ease, background-color 0.3s ease',
    'animation': 'slideIn 1s ease-in-out'
  },
  'skill-item i': {
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'fontSize': [{ 'unit': 'em', 'value': 1.5 }],
    'color': '#ff4081'
  },
  'skill-item p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'skill-item:hover': {
    'transform': 'scale(1.05)',
    'backgroundColor': '#ff4081',
    'color': '#fff'
  },
  'skill-item:hover i': {
    'color': '#fff'
  },
  'project-list': {
    'display': 'flex',
    'flexWrap': 'wrap',
    'justifyContent': 'center'
  },
  'project-item': {
    'backgroundColor': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'borderRadius': '10px',
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': 'px', 'value': 300 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.1)' }],
    'transition': 'transform 0.3s ease, box-shadow 0.3s ease'
  },
  'project-item:hover': {
    'transform': 'translateY(-10px)',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2)' }]
  },
  'project-item h3': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'color': '#ff4081'
  },
  'contact p': {
    'fontSize': [{ 'unit': 'em', 'value': 1.2 }]
  }
});

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Import Roboto font from Google Fonts
  'import': 'url('https://fonts.googleapis.com/css2?family=Roboto:wght@400',
  '700&display=swap'); body': {
    'fontFamily': ''Roboto', sans-serif',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'boxSizing': 'border-box'
  },
  // Style the navbar
  'navbar': {
    'display': 'flex',
    'justifyContent': 'space-between',
    'alignItems': 'center',
    'backgroundColor': '#333',
    'padding': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 2 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 2 }]
  },
  'logo a': {
    'color': '#fff',
    'fontSize': [{ 'unit': 'rem', 'value': 1.5 }],
    'textDecoration': 'none',
    'fontWeight': '700'
  },
  'nav-links': {
    'listStyle': 'none',
    'display': 'flex',
    'gap': '1.5rem'
  },
  'nav-links li': {
    'display': 'inline'
  },
  'nav-links a': {
    'color': '#fff',
    'textDecoration': 'none',
    'fontSize': [{ 'unit': 'rem', 'value': 1 }],
    'transition': 'color 0.3s ease'
  },
  'nav-links a:hover': {
    'color': '#ff6347',
    // Tomato color for hover effect
  }
});

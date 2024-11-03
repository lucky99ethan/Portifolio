import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'footer': {
    'backgroundColor': '#333',
    'color': '#fff',
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center'
  },
  'footer-container': {
    'display': 'flex',
    'justifyContent': 'space-around',
    'flexWrap': 'wrap'
  },
  'footer-about': {
    'flex': '1',
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'footer-contact': {
    'flex': '1',
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'footer-social': {
    'flex': '1',
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'footer h3': {
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'footer a': {
    'color': '#fff',
    'textDecoration': 'none',
    'display': 'block',
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }]
  },
  'footer a:hover': {
    'textDecoration': 'underline'
  }
});

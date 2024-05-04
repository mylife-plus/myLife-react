import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { 
      flex: 1, 
      backgroundColor: '#fff' 
    },
  header: { fontSize: 24, 
    paddingVertical: 5, paddingLeft: 15, 
    fontWeight: '100', 
    backgroundColor: '#fff', 
    color: '#808080', 
    marginLeft: 10 },
  item: { flexDirection: 'row', 
  alignItems: 'center', 
  backgroundColor: '#fff', 
  padding: 10, 
  borderBottomWidth: StyleSheet.hairlineWidth, 
  borderBottomColor: '#ddd', 
  justifyContent: 'space-between' },
  lastItemInSection: { 
      marginBottom: 20 
    },
  title: { marginLeft: 25, 
    fontSize: 20, 
    flex: 1 },
  icon: { width: 30, height: 30, 
    marginLeft: 15, 
    justifyContent: 'center', 
    alignItems: 'center' },
  arrow: { color: '#cccccc' },
  sectionSpacer: { height: 20 },
});

export default styles;

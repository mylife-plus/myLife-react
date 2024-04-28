import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 16,
    marginLeft: 15,
  },
  subtitle: {
    fontSize: 20,
    padding: 16,
    paddingTop: 8,
    fontWeight: '600',
    marginLeft: 15,
  },
  iconContainer: {
    margin: 10,
    marginLeft: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 8,
    overflow: 'hidden',
  },
  categoryIcon: {
    width: 50,
    height: 50,
  },
  addButton: {
    margin: 10,
    marginLeft: 10,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addIcon: {
    width: 40,
    height: 40,
  },
  sectionSeparator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 8,
  },
  listSeparator: {
    width: 50,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  uploadText: {
    fontSize: 18,
  },
  uploadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalView: {
    marginTop: 50,
    marginHorizontal: 20,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textInput: {
    height: 40,
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: 'gray',
  },

rowFront: {
  backgroundColor: '#FFF', 
  justifyContent: 'center',
  height: 50, 
  borderBottomWidth: 1,
  borderBottomColor: '#ccc',
},


  backRightBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    width: 75,
    backgroundColor: 'red',
  },
  

  backRightBtnRight: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,  
    height: '100%', 
  },

  backTextWhite: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: 'transparent', 
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  
  
});

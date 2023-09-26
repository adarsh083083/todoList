import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  todoListStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 16,
    borderRadius: 8,
  },
  deleteIcon: {
    height: 30,
    width: 30,
  },
});

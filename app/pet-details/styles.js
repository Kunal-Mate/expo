import {StyleSheet} from 'react-native';
import COLORS from '../../src/constants/COLOR';
import FONT from '../../src/constants/FONT';

const styles = StyleSheet.create({
  ActionContainer: {
    padding: 15,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  ButtonContainer: {
    margin: 15,
    padding: 10,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  Container: {
  },
  
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    marginRight: 20,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    flex:1
  },
  detailsContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 30,
    height:700,
  },
  
});
export default styles;
